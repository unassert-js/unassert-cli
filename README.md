unassert-cli
================================

CLI for [unassert](https://github.com/twada/unassert). Provides `unassert` command which compiles assertions away from target file.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


#### RELATED MODULES

- [unassert](https://github.com/twada/unassert): Encourage reliable programming by writing assertions in production code, and compiling them away from release.
- [unassertify](https://github.com/twada/unassertify): Browserify transform for unassert
- [babel-plugin-unassert](https://github.com/twada/babel-plugin-unassert): Babel plugin for unassert
- [webpack-unassert-loader](https://github.com/zoncoen/webpack-unassert-loader): Webpack loader for unassert
- [gulp-unassert](https://github.com/twada/gulp-unassert): Gulp plugin for unassert


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/twada/unassert-cli/blob/master/CHANGELOG.md)


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

See [unassert](https://github.com/twada/unassert) project for more documentation.


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


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.


[npm-url]: https://npmjs.org/package/unassert-cli
[npm-image]: https://badge.fury.io/js/unassert-cli.svg

[travis-url]: https://travis-ci.org/twada/unassert-cli
[travis-image]: https://secure.travis-ci.org/twada/unassert-cli.svg?branch=master

[depstat-url]: https://gemnasium.com/twada/unassert-cli
[depstat-image]: https://gemnasium.com/twada/unassert-cli.svg

[license-url]: http://twada.mit-license.org/
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
