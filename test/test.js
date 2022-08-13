'use strict';

const child = require('child_process');
const fs = require('fs');
const path = require('path');
const concat = require('concat-stream');
const assert = require('assert');
const unassertCommand = path.join(__dirname, '..', 'bin', 'cmd.js');

function testUnassertCommand (fixtureName) {
  const fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
  const expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
  const input = fs.readFileSync(fixtureFilepath, 'utf8');
  const expected = fs.readFileSync(expectedFilepath, 'utf8');
  function assertOutputMatches (proc, done) {
    proc.stdout.pipe(concat(function (output) {
      assert.equal(output.toString('utf8'), expected);
      done();
    }));
  }
  describe(fixtureName, function () {
    it('open file when filepath is specified', function (done) {
      const proc = child.spawn(unassertCommand, [fixtureFilepath]);
      assertOutputMatches(proc, done);
    });
    it('read from stdin when filepath is not specified', function (done) {
      const proc = child.spawn(unassertCommand);
      assertOutputMatches(proc, done);
      proc.stdin.end(input);
    });
    it('read from stdin when filepath is "-"', function (done) {
      const proc = child.spawn(unassertCommand, ['-']);
      assertOutputMatches(proc, done);
      proc.stdin.end(input);
    });
  });
}

describe('unassert-cli', function () {
  testUnassertCommand('func');
  testUnassertCommand('commonjs');
  testUnassertCommand('commonjs_singlevar');
  testUnassertCommand('commonjs_powerassert');
  testUnassertCommand('assignment');
  testUnassertCommand('assignment_singlevar');
  testUnassertCommand('es6module');
  testUnassertCommand('es6module_powerassert');
  testUnassertCommand('not_an_expression_statement');
});
