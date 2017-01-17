unassert-cli
================================

CLI for [unassert](https://github.com/unassert-js/unassert). Provides `unassert` command which compiles assertions away from target file.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


#### RELATED MODULES

- [unassert](https://github.com/unassert-js/unassert): Encourages programming with assertions by providing tools to compile them away.
- [unassertify](https://github.com/unassert-js/unassertify): Browserify transform for unassert
- [babel-plugin-unassert](https://github.com/unassert-js/babel-plugin-unassert): Babel plugin for unassert
- [webpack-unassert-loader](https://github.com/unassert-js/webpack-unassert-loader): Webpack loader for unassert
- [gulp-unassert](https://github.com/unassert-js/gulp-unassert): Gulp plugin for unassert


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/unassert-js/unassert-cli/blob/master/CHANGELOG.md)


EXAMPLE
---------------------------------------

For given `math.js` below,

```javascript
'use strict';

var assert = require('assert');

function add (a, b) {
    console.assert(typeof a === 'number');
    assert(!isNaN(a));
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
```

Install `unassert` command, run it and redirect its output into file.

```
$ npm install -g unassert-cli
$ unassert /path/to/src/math.js > /path/to/dist/math.js
```

Then you will see assert calls in `/path/to/dist/math.js` disappear.

```javascript
'use strict';
function add(a, b) {
    return a + b;
}
```

See [unassert](https://github.com/unassert-js/unassert) project for more documentation.


INSTALL
---------------------------------------

### via npm

Install globally,

    $ npm install -g unassert-cli

and/or locally.

    $ npm install --save-dev unassert-cli


USAGE
---------------------------------------

```
$ unassert /path/to/src/target.js > /path/to/build/target.js
```

```
$ cat /path/to/src/target.js | unassert > /path/to/build/target.js
```


OUR SUPPORT POLICY
---------------------------------------

We support Node under maintenance. In other words, we stop supporting old Node version when [their maintenance ends](https://github.com/nodejs/LTS).

This means that any other environment is not supported.

NOTE: If unassert-cli works in any of the unsupported environments, it is purely coincidental and has no bearing on future compatibility. Use at your own risk.


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](https://github.com/unassert-js/unassert/blob/master/LICENSE) license.


[npm-url]: https://npmjs.org/package/unassert-cli
[npm-image]: https://badge.fury.io/js/unassert-cli.svg

[travis-url]: https://travis-ci.org/unassert-js/unassert-cli
[travis-image]: https://secure.travis-ci.org/unassert-js/unassert-cli.svg?branch=master

[depstat-url]: https://gemnasium.com/unassert-js/unassert-cli
[depstat-image]: https://gemnasium.com/unassert-js/unassert-cli.svg

[license-url]: https://github.com/unassert-js/unassert/blob/master/LICENSE
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
