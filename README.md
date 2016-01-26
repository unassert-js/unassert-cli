unassert-cli
================================

Command line tool for [unassert](https://github.com/twada/unassert)


DESCRIPTION
---------------------------------------

unassert-cli provides an `unassert` command which compiles assertions away from target file.


#### RELATED MODULES

- [unassert](https://github.com/twada/unassert): Encourage reliable programming by writing assertions in production code, and compiling them away from release.
- [unassertify](https://github.com/twada/unassertify): Browserify transform for unassert
- [babel-plugin-unassert](https://github.com/twada/babel-plugin-unassert): Babel plugin for unassert
- [webpack-unassert-loader](https://github.com/zoncoen/webpack-unassert-loader): Webpack loader for unassert
- [gulp-unassert](https://github.com/twada/gulp-unassert): Gulp plugin for unassert


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/twada/unassert-cli/blob/master/CHANGELOG.md)


USAGE
---------------------------------------

```
$ unassert /path/to/src/target.js > /path/to/build/target.js
```

```
$ cat /path/to/src/target.js | unassert > /path/to/build/target.js
```


INSTALL
---------------------------------------

### via npm

Install locally,

    $ npm install --save-dev unassert-cli

and/or globally.

    $ npm install -g unassert-cli


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.
