'use strict';

var child = require('child_process');
var fs = require('fs');
var path = require('path');
var concat = require('concat-stream');
var assert = require('assert');
var unassertCommand = path.join(__dirname, '..', 'bin', 'cmd.js');

function testUnassertCommand (fixtureName) {
    it(fixtureName, function (done) {
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
        var expected = fs.readFileSync(expectedFilepath).toString();
        var proc = child.spawn(unassertCommand, [fixtureFilepath]);
        proc.stdout.pipe(concat(function (output) {
            assert.equal(output.toString('utf8'), expected);
            done();
        }));
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
