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

const { createReadStream } = require('fs');
const concat = require('concat-stream');
const { parse } = require('acorn');
const { generate } = require('escodegen');
const { unassertAst, defaultOptions } = require('unassert');

// add `power-assert` to target modules to avoid breaking change
function generateUnassertOptions () {
  const opts = defaultOptions();
  opts.modules.push('power-assert');
  return opts;
}

function transform (code) {
  const ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' });
  return generate(unassertAst(ast, generateUnassertOptions()));
}

const args = process.argv.slice(2);
const file = args[0];
const input = (file && file !== '-') ? createReadStream(file) : process.stdin;

input.pipe(concat((buf) => {
  console.log(transform(buf.toString('utf8')));
}));
