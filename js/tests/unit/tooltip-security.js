/* Regression tests for Bootstrap tooltip/popover HTML sanitization (CVE-2025-1647). */
$(function () {
  'use strict'

  QUnit.module('tooltip sanitizer security')

  function sanitize(html) {
    var Tooltip = $.fn.tooltip.Constructor
    return Tooltip.prototype.sanitizeHtml.call({
      options: {
        whiteList: Tooltip.DEFAULTS.whiteList,
        sanitizeFn: null
      }
    }, html)
  }

  function withParserFailure(callback) {
    var OriginalDOMParser = window.DOMParser

    window.DOMParser = function () {
      this.parseFromString = function () {
        throw new Error('Simulated DOMParser failure')
      }
    }

    try {
      return callback()
    } finally {
      window.DOMParser = OriginalDOMParser
    }
  }

  function withClobberedImplementation(callback) {
    var original = Object.getOwnPropertyDescriptor(document, 'implementation')
    var attempted = false

    // Shadow the native Document.prototype property with an attacker-controlled
    // object. This simulates DOM clobbering without adding executable HTML.
    Object.defineProperty(document, 'implementation', {
      configurable: true,
      value: {
        createHTMLDocument: function () {
          attempted = true
          throw new Error('Attacker-controlled createHTMLDocument called')
        }
      }
    })

    try {
      return callback(function () { return attempted })
    } finally {
      if (original) {
        Object.defineProperty(document, 'implementation', original)
      } else {
        delete document.implementation
      }
    }
  }

  QUnit.test('preserves allowed markup and safe attributes', function (assert) {
    assert.expect(6)

    var html = sanitize('<b>bold</b><span aria-pressed="true">x<sup>2</sup><sub>3</sub></span>' +
      '<a href="https://example.org/path" title="good">link</a>')
    var $container = $('<div>').html(html)

    assert.strictEqual($container.find('b').text(), 'bold')
    assert.strictEqual($container.find('span').attr('aria-pressed'), 'true')
    assert.strictEqual($container.find('sup').text(), '2')
    assert.strictEqual($container.find('sub').text(), '3')
    assert.strictEqual($container.find('a').attr('href'), 'https://example.org/path')
    assert.strictEqual($container.find('a').attr('title'), 'good')
  })

  QUnit.test('removes unsafe HTML, event handlers and URI schemes', function (assert) {
    assert.expect(8)

    var html = sanitize('<b onclick="alert(1)">safe</b>' +
      '<script>alert(1)</script>' +
      '<svg onload="alert(1)"><circle></circle></svg>' +
      '<a href="java&#x73;cript:alert(1)" onmouseover="alert(1)">bad link</a>' +
      '<img src="data:image/svg+xml;base64,PHN2Zz4=" onerror="alert(1)">' +
      '<a href="mailto:info@example.org">good link</a>' +
      '<img src="data:image/png;base64,AAAA" alt="good image">')
    var $container = $('<div>').html(html)
    var $links = $container.find('a')
    var $images = $container.find('img')

    assert.strictEqual($container.find('script, svg, circle').length, 0)
    assert.strictEqual($container.find('b').attr('onclick'), undefined)
    assert.strictEqual($links.eq(0).attr('href'), undefined)
    assert.strictEqual($links.eq(0).attr('onmouseover'), undefined)
    assert.strictEqual($images.eq(0).attr('src'), undefined)
    assert.strictEqual($images.eq(0).attr('onerror'), undefined)
    assert.strictEqual($links.eq(1).attr('href'), 'mailto:info@example.org')
    assert.strictEqual($images.eq(1).attr('src'), 'data:image/png;base64,AAAA')
  })

  QUnit.test('DOMParser does not use a clobbered document.implementation', function (assert) {
    assert.expect(2)

    var html
    var fallbackCalled

    withClobberedImplementation(function (wasCalled) {
      html = sanitize('<span onclick="alert(1)">safe</span>')
      fallbackCalled = wasCalled()
    })

    assert.notOk(fallbackCalled, 'did not use attacker-controlled fallback')
    assert.strictEqual(html, '<span>safe</span>', 'HTML is still sanitized')
  })

  QUnit.test('DOMParser failure permits a genuine DOMImplementation fallback', function (assert) {
    assert.expect(3)

    var html
    withParserFailure(function () {
      html = sanitize('<b onclick="alert(1)">safe</b><a href="javascript:alert(1)">bad</a>')
    })

    var $container = $('<div>').html(html)
    assert.strictEqual($container.find('b').text(), 'safe')
    assert.strictEqual($container.find('b').attr('onclick'), undefined)
    assert.strictEqual($container.find('a').attr('href'), undefined)
  })

  QUnit.test('DOMParser failure rejects a clobbered DOMImplementation', function (assert) {
    assert.expect(3)

    var error = null
    var fallbackCalled = false
    withParserFailure(function () {
      withClobberedImplementation(function (wasCalled) {
        try {
          sanitize('<span>unsafe fallback</span>')
        } catch (e) {
          error = e
        }
        fallbackCalled = wasCalled()
      })
    })

    assert.ok(error instanceof Error, 'invalid implementation causes an error')
    assert.ok(/sanitiz/i.test(error && error.message), 'error identifies sanitization failure')
    assert.notOk(fallbackCalled, 'untrusted createHTMLDocument is never called')
  })

  QUnit.test('tooltip html titles use the sanitizer', function (assert) {
    assert.expect(3)

    var $trigger = $('<button type="button">tooltip</button>')
      .appendTo('#qunit-fixture')
      .tooltip({
        trigger: 'manual',
        animation: false,
        html: true,
        title: '<b>safe</b><img src="x" onerror="alert(1)"><a href="javascript:alert(1)">bad</a>'
      })
    var tooltip = $trigger.data('bs.tooltip')
    tooltip.setContent()
    var $inner = tooltip.tip().find('.tooltip-inner')

    assert.strictEqual($inner.find('b').text(), 'safe')
    assert.strictEqual($inner.find('img').attr('onerror'), undefined)
    assert.strictEqual($inner.find('a').attr('href'), undefined)
  })

  QUnit.test('popover html titles and content use the sanitizer', function (assert) {
    assert.expect(4)

    var $trigger = $('<button type="button">popover</button>')
      .appendTo('#qunit-fixture')
      .popover({
        trigger: 'manual',
        animation: false,
        html: true,
        title: '<b>safe title</b><img src="x" onerror="alert(1)">',
        content: '<span>safe body</span><a href="javascript:alert(1)" onclick="alert(1)">bad</a>'
      })
    var popover = $trigger.data('bs.popover')
    popover.setContent()
    var $tip = popover.tip()

    assert.strictEqual($tip.find('.popover-title b').text(), 'safe title')
    assert.strictEqual($tip.find('.popover-title img').attr('onerror'), undefined)
    assert.strictEqual($tip.find('.popover-content span').text(), 'safe body')
    assert.strictEqual($tip.find('.popover-content a').attr('href'), undefined)
  })
})
