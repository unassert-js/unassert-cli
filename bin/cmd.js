#!/usr/bin/env node

/**
 * unassert-cli
 *   CLI for unassert:
 *     Provides `unassert` command which compiles assertions away from target file.
 *
 * https://github.com/unassert-js/unassert-cli
 *
 * Copyright (c) 2016-2017 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/unassert-js/unassert-cli/blob/master/LICENSE
 */
'use strict';

const fs = require('fs');
const concat = require('concat-stream');
const acorn = require('acorn');
const escodegen = require('escodegen');
const unassert = require('unassert');

function transform (code) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
  return escodegen.generate(unassert(ast));
}

const args = process.argv.slice(2);
const file = args[0];
const input = (file && file !== '-') ? fs.createReadStream(file) : process.stdin;

input.pipe(concat(function (buf) {
  console.log(transform(buf.toString('utf8')));
}));
