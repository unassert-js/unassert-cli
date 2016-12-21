#!/usr/bin/env node

/**
 * unassert-cli
 *   CLI for unassert:
 *     Encourage reliable programming by writing assertions in production code,
 *     and compiling them away from release.
 *
 * https://github.com/unassert-js/unassert-cli
 *
 * Copyright (c) 2016 Takuto Wada
 * Licensed under the MIT license.
 *   https://twada.mit-license.org/
 */
'use strict';

var fs = require('fs');
var concat = require('concat-stream');
var esprima = require('esprima');
var escodegen = require('escodegen');
var unassert = require('unassert');

function transform (code) {
    var ast = esprima.parse(code, { sourceType: 'module' });
    return escodegen.generate(unassert(ast));
}

var args = process.argv.slice(2);
var file = args[0];
var input = (file && file !== '-') ? fs.createReadStream(file) : process.stdin;

input.pipe(concat(function(buf) {
    console.log(transform(buf.toString('utf8')));
}));

