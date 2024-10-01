# [Bootstrap](https://getbootstrap.com/)

![Bower version](https://img.shields.io/bower/v/bootstrap.svg)
[![npm version](https://img.shields.io/npm/v/bootstrap.svg)](https://www.npmjs.com/package/bootstrap)
[![Build Status](https://img.shields.io/travis/entreprise7pro/bootstrap/v3-dev.svg)](https://travis-ci.org/entreprise7pro/bootstrap)
[![devDependency Status](https://img.shields.io/david/dev/entreprise7pro/bootstrap.svg)](https://david-dm.org/entreprise7pro/bootstrap#info=devDependencies)
[![NuGet](https://img.shields.io/nuget/v/bootstrap.svg)](https://www.nuget.org/packages/Bootstrap)

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thornton](https://twitter.com/fat), and maintained by the [core team](https://github.com/orgs/entreprise7pro/people) with the massive support and involvement of the community.

To get started, check out <https://getbootstrap.com/>!


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

* [Download the latest release](https://github.com/entreprise7pro/bootstrap/archive/refs/tags/v3-dev-7.zip).  USE THIS APPROACH NOW, AS THE OTHERS ARE NOT YET READY
* Clone the repo: `git clone https://github.com/entreprise7pro/bootstrap.git`.
* Install with [Meteor](https://www.meteor.com/): `meteor add entreprise7pro:bootstrap`. TBD
* Install with [Composer](https://getcomposer.org/): `composer require entreprise7pro/bootstrap`. TBD

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

Note that **feature requests must target [Bootstrap v3](https://github.com/entreprise7pro/bootstrap/tree/v3-dev),** because Bootstrap v3 is now in maintenance mode and is closed off to new features. This is so that we can focus our efforts on Bootstrap v3.


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://bootstrap.7pro.ca/>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](https://jekyllrb.com/docs/installation/) and other Ruby dependencies with `bundle install`.
   **Note for Windows users:** Read [this guide](https://jekyllrb.com/docs/installation/windows/) to get Jekyll up and running without problems.
2. From the root `/bootstrap` directory, run `bundle exec jekyll serve` in the command line.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

### Documentation for previous releases

Documentation for v2.3.2 has been made available for the time being at <https://getbootstrap.com/2.3.2/> while folks transition to Bootstrap 3.

[Previous releases](https://github.com/entreprise7pro/bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/entreprise7pro/bootstrap/tree/v3-dev/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

**entreprise7pro fork of Bootstrap v3 is now actively working towards a new release which will be compatible with jQuery 4.** Focusing our efforts on [Bootstrap v3](https://github.com/entreprise7pro/bootstrap/tree/v3-dev), the future of the entreprise7pro forked bootstrap release of the framework. Pull requests which add new features (rather than fix bugs) should target [Bootstrap v3 (the `v3-dev` git branch)](https://github.com/entreprise7pro/bootstrap/tree/v3-dev).

Editor preferences are available in the [editor config](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

ootstrap` channel.
* Implementation help may be found at Stack Overflow (tagged [`twitter-bootstrap-3`](https://stackoverflow.com/questions/tagged/twitter-bootstrap-3)).
* Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/entreprise7pro/bootstrap/releases) for changelogs for each release version of Bootstrap.


## Thanks

<img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="490" height="106">

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!


## Creators

**Mark Otto**

* <https://twitter.com/mdo>
* <https://github.com/mdo>

**Jacob Thornton**

* <https://twitter.com/fat>
* <https://github.com/fat>

## Maintainers of entreprise7pro fork of bootstrap 3
* <https://drupal.org/u/joseph.olstad>
* <https://github.com/joejoseph00>

## Copyright and license

Entreprise 7pro.ca Inc 2024.  Code released under [the MIT license](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/LICENSE). Docs released under [Creative Commons](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/docs/LICENSE).
Code and documentation copyright 2011-2019 Twitter, Inc. Code released under [the MIT license](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/LICENSE). Docs released under [Creative Commons](https://github.com/entreprise7pro/bootstrap/blob/v3-dev/docs/LICENSE).
