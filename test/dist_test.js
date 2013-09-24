'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dist = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  simple_test: function(test) {
    test.expect(3);

    var actual = grunt.file.read('test/fixtures/a file');
    var expected = grunt.file.read('tmp/a file');
    test.equal(actual, expected, 'should move file "a file" to tmp dir');

    actual = grunt.file.read('test/fixtures/a folder/another file.txt') + grunt.file.read('test/fixtures/a folder/subfolder/mirror.md');
    expected = grunt.file.read('tmp/another folder/another file.txt') + grunt.file.read('tmp/another folder/subfolder/mirror.md');
    test.equal(actual, expected, 'should mirror a whole dir');

    actual = grunt.file.read('test/fixtures/a folder/subfolder/mirror.md');
    expected = grunt.file.read('tmp/mirror.md');
    test.equal(actual, expected, 'should move file a file to a different location');

    test.done();
  },
};
