'use strict';

const { spawn } = require('child_process');
const { readFileSync } = require('fs');
const { join, resolve } = require('path');
const concat = require('concat-stream');
const assert = require('assert').strict;
const unassertCommand = join(__dirname, '..', 'bin', 'cmd.js');

function testUnassertCommand (fixtureName) {
  const fixtureFilepath = resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
  const expectedFilepath = resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
  const input = readFileSync(fixtureFilepath, 'utf8');
  const expected = readFileSync(expectedFilepath, 'utf8');
  function assertOutputMatches (proc, done) {
    proc.stdout.pipe(concat((output) => {
      assert.equal(output.toString('utf8'), expected);
      done();
    }));
  }
  describe(fixtureName, () => {
    it('open file when filepath is specified', (done) => {
      const proc = spawn(unassertCommand, [fixtureFilepath]);
      assertOutputMatches(proc, done);
    });
    it('read from stdin when filepath is not specified', (done) => {
      const proc = spawn(unassertCommand);
      assertOutputMatches(proc, done);
      proc.stdin.end(input);
    });
    it('read from stdin when filepath is "-"', (done) => {
      const proc = spawn(unassertCommand, ['-']);
      assertOutputMatches(proc, done);
      proc.stdin.end(input);
    });
  });
}

describe('unassert-cli', () => {
  testUnassertCommand('func');
  testUnassertCommand('commonjs');
  testUnassertCommand('commonjs_singlevar');
  testUnassertCommand('commonjs_powerassert');
  testUnassertCommand('assignment');
  testUnassertCommand('assignment_singlevar');
  testUnassertCommand('es6module');
  testUnassertCommand('es6module_powerassert');
});
