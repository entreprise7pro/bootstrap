# [Entreprise7pro Bootstrap 3](https://bootstrap.7pro.ca/)

## Why Entreprise7pro Bootstrap 3? 

- Entreprise7pro Bootstrap 3 is compatible with jQuery 4, jQuery 3, jQuery 2 and jQuery 1.8+
- Entreprise7pro Bootstrap 3 has CVE fix for [CVE-2024-6485](https://nvd.nist.gov/vuln/detail/CVE-2024-6485) and also for [CVE-2025-1647](https://nvd.nist.gov/vuln/detail/cve-2025-1647)
- What to expect going forward?
1. CVE coverage
2. Bugfixes
3. The possibility of backporting one or more important features from bs4/bs5 into a new branch called 3.5.x.

[![npm version](https://img.shields.io/npm/v/entreprise7pro-bootstrap.svg)](https://www.npmjs.com/package/entreprise7pro-bootstrap)
<!--[![Build Status](https://img.shields.io/travis/entreprise7pro/bootstrap/v3-dev.svg)](https://travis-ci.org/entreprise7pro/bootstrap) TBD!-->

### Bower recognizes all github projects.

- `bower install entreprise7pro/bootstrap --save`

### Composer instructions

- `composer require entreprise7pro/bootstrap`
- https://packagist.org/packages/entreprise7pro/bootstrap
- https://packagist.org/packages/entreprise7pro/bootstrap-sass (optional)

### NPM installation

- `npm install entreprise7pro-bootstrap`

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development.

## ACTIVELY SUPPORTED

### SPONSORED BY

- [Cinder Systems Corp](https://cinders.io)
- Entreprise 7pro.ca Inc.

### Maintainers

- [Joseph Olstad](https://drupal.org/u/josepholstad)
- [Stephen Mulvihill](https://www.drupal.org/u/smulvih2)


Originally created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thornton](https://twitter.com/fat), and previously maintained by the [core team](https://github.com/orgs/entreprise7pro/people) with the massive support and involvement of the community.

To get started, check out <https://bootstrap.7pro.ca/>!


## Table of contents

* [Quick start](#quick-start)
* [Bugs and feature requests](#bugs-and-feature-requests)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [Community](#community)
* [Versioning](#versioning)
* [Creators](#creators)
* [Thanks](#thanks)
* [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

* [Download the latest release](https://github.com/entreprise7pro/bootstrap/releases/latest).
* Clone the repo: `git clone https://github.com/entreprise7pro/bootstrap.git`.
* Consume the CDNs https://bootstrap.7pro.ca
* Install with [Composer](https://getcomposer.org/): `composer require entreprise7pro/bootstrap`.


Read the [Getting started page](https://getbootstrap.com/docs/3.4/getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   ├── bootstrap-theme.min.css
│   └── bootstrap-theme.min.css.map
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons are included, as is the optional Bootstrap theme.


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/entreprise7pro/bootstrap/issues/new).

Note that **feature requests must target [Bootstrap v3](https://github.com/entreprise7pro/bootstrap/tree/v3-dev),**. We are focused on maintenance and compatibility of bootstrap 3 with modern dependencies like jQuery v4 and most browsers.


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted at <https://bootstrap.7pro.ca/>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](https://jekyllrb.com/docs/installation/) and other Ruby dependencies with `bundle install`.
   **Note for Windows users:** Read [this guide](https://jekyllrb.com/docs/installation/windows/) to get Jekyll up and running without problems.
2. From the root `/bootstrap` directory, run `bundle exec jekyll serve` in the command line.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

### Documentation for previous releases

[Previous releases](https://github.com/entreprise7pro/bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/entreprise7pro/bootstrap/tree/v3-dev/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

**compatible with jQuery 4.** We are focusing our efforts on [Bootstrap v3](https://github.com/entreprise7pro/bootstrap/tree/v3-dev), the future of the entreprise7pro bootstrap release of the framework is here.

Pull requests which add new features (rather than fix bugs) should target [Bootstrap v3 (the `v3-dev` git branch)](https://github.com/entreprise7pro/bootstrap/tree/v3-dev).

Editor preferences are available in the [editor config](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

ootstrap` channel.
* Implementation help may be found at Stack Overflow (tagged [`entreprise7pro-bootstrap`](https://stackoverflow.com/questions/tagged/entreprise7pro-bootstrap)).
* Developers should use the keyword `bootstrap` and or `entreprise7pro` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:entreprise7pro-bootstrap) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/entreprise7pro/bootstrap/releases) for changelogs for each release version of Bootstrap.

## Compiling

* `sudo apt install nodejs npm`
* `sudo apt install node-grunt-cli`
* `bundle exec grunt --force`
* `openssl dgst -sha384 -binary dist/js/bootstrap.min.js | base64`
* `openssl dgst -sha384 -binary dist/css/bootstrap-theme.min.css | base64`
* `openssl dgst -sha384 -binary dist/css/bootstrap.min.css | base64`
* `npm run release`
* npm run release-zip

## Releasing a new version

Maintainer release checklist (example: **v3.4.10**). Substitute the new
version in the commands for future releases. Prepare releases on **`v3-dev`**,
the default branch; there is no need to merge into `main` just to publish.

1. **Prepare the version.** From the repository root, check the branch and
   working tree:

   ```sh
   git switch v3-dev
   git status --short
   ```

   Synchronize version metadata in `package.json`, `package-lock.json`,
   `package.js`, `_config.yml`, and the JavaScript component version headers
   and `Constructor.VERSION` constants. Review any changes carefully; the
   existing `npm run change-version` command performs broad replacements.

2. **Test and build.** Install dependencies if necessary, then run:

   ```sh
   npm ci
   npx grunt test-js
   npm run release
   git diff --check
   git status --short
   ```

   `test-js` runs lint/style checks and the Karma browser tests; local Snap
   Firefox may need a writable temporary-profile location if the Gruntfile
   workaround has not been applied. `npm run release` produces the compiled
   distribution, documentation, SRI hashes, and the release ZIP. Do **not**
   run `npm run release-zip` a second time. Inspect the generated artifacts.

3. **Commit, push, and verify CI.** Commit only intended changes (avoid local
   `.tgz` files and other unrelated archives), push `v3-dev`, and verify the
   [GitHub Actions checks](https://github.com/entreprise7pro/bootstrap/actions)
   for that commit:

   ```sh
   git add -u
   # Add any intended new files explicitly: git add <path>
   git diff --cached --check
   git diff --cached --stat
   git commit -m "Release v3.4.10"
   git push origin v3-dev
   ```

   Skip the commit if everything is already committed. Do not tag until the
   relevant CI checks pass and release contents are final.

4. **Tag the release** at the verified commit:

   ```sh
   git status --short
   git tag -a v3.4.10 -m "Bootstrap v3.4.10"
   git push origin v3.4.10
   ```

   Do not move or reuse a published tag.

5. **Publish the GitHub Release** at
   [New release](https://github.com/entreprise7pro/bootstrap/releases/new):
   select `v3.4.10`, add release notes, optionally attach
   `bootstrap-3.4.10-dist.zip`, and publish as the latest stable release.
   A Git tag alone does not create a GitHub Release unless an automation
   explicitly handles it.

6. **Publish to npm**, after verifying no workflow already published the
   version, using the manual CLI authentication procedure below. Package name:
   `entreprise7pro-bootstrap` (not `entreprise7pro/bootstrap`). Check
   availability, review contents, publish once, and verify the result:

   ```sh
   npm login --auth-type=web
   npm view entreprise7pro-bootstrap@3.4.10 version
   npm pack --dry-run
   npm pack
   npm publish --access public
   npm view entreprise7pro-bootstrap@3.4.10 version
   ```

7. **Check Packagist and the documentation site.** Verify that
   [`entreprise7pro/bootstrap`](https://packagist.org/packages/entreprise7pro/bootstrap)
   lists the new Git tag; if not, sign in and select **Update**. Confirm
   [bootstrap.7pro.ca](https://bootstrap.7pro.ca/) reflects the new release
   (deploy manually if necessary).

### npm CLI authentication (manual publishing)

Use the terminal login method, rather than npm's browser-login default:

```sh
npm login --auth-type=web
npm whoami
```

Sign in with the maintainer account that has publishing rights for
`entreprise7pro-bootstrap` (`josepholstad`); `npm whoami` verifies which
account the CLI is using. Legacy login still requires any applicable 2FA
verification. If npm opens a passkey/security-key prompt during account setup
or authorization, a supported phone may offer **Use PIN** / **Try another
way** instead of a fingerprint. A government smart card is not necessarily
a compatible FIDO2 security key. Never commit npm credentials or tokens.

Before publishing, inspect the tarball and check whether the version already
exists on npm:

```sh
npm pack --dry-run
npm view entreprise7pro-bootstrap@3.4.10 version
npm publish --access public
```

Substitute the current release version for `3.4.10`. A 404/not-found result
from `npm view` before publication is expected for a new version; if the
version already exists, **do not publish it again**. `E403` requiring 2FA
means login alone is insufficient: satisfy the account's current publishing
security requirements, then retry. The command-line login method does not
bypass publishing security checks.

## Thanks

<img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="490" height="106">

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

## Current Maintainers

**Stephen Mulvihill**

* <https://drupal.org/u/smulvih2>
* <https://github.com/smulvih2>

**Joseph Olstad**

* <https://drupal.org/u/joseph.olstad>
* <https://github.com/joejoseph00>


## Website for entreprise7pro-bootstrap

* <https://bootstrap.7pro.ca>

## Creators

**Mark Otto**

* <https://x.com/mdo>
* <https://github.com/mdo>

**Jacob Thornton**

* <https://x.com/fat>
* <https://github.com/fat>


## Copyright and license

Entreprise 7pro.ca Inc. copyright 2026.
Currently released under [the MIT license](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/LICENSE).
Docs released under [Creative Commons](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/docs/LICENSE).
Code and documentation copyright 2011-2019 Twitter, Inc.
Twitter Code previously released under [the MIT license](https://github.com/twbs/bootstrap/blob/v3-dev/LICENSE).
