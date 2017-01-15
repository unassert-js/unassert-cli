#!/usr/bin/env node

/**
 * unassert-cli
 *   CLI for unassert:
 *     Encourage reliable programming by writing assertions in production code,
 *     and compiling them away from release.
 *
 * https://github.com/unassert-js/unassert-cli
 *
 * Copyright (c) 2016-2017 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/unassert-js/unassert-cli/blob/master/LICENSE
 */
'use strict';

var fs = require('fs');
var concat = require('concat-stream');
var acorn = require('acorn');
var escodegen = require('escodegen');
var unassert = require('unassert');

function transform (code) {
    var ast = acorn.parse(code, { sourceType: 'module' });
    return escodegen.generate(unassert(ast));
}

var args = process.argv.slice(2);
var file = args[0];
var input = (file && file !== '-') ? fs.createReadStream(file) : process.stdin;

input.pipe(concat(function(buf) {
    console.log(transform(buf.toString('utf8')));
}));
