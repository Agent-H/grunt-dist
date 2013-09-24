/*
 * dist
 * https://github.com/Agent-H/grunt-dist
 *
 * Copyright (c) 2013 Agent-H
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dist', 'Moves files from build dir to dist dir', function() {

    var inputDir = this.data.input || void grunt.log.error('no input dir specified');
    var outputDir = this.data.output || void grunt.log.error('no output dir specified');

    if (inputDir === undefined || outputDir === undefined) {
      return false;
    }

    if (grunt.file.exists(outputDir)) {
      grunt.file.delete(outputDir);
    }

    // Iterate over all specified file groups.
    this.data.dist.forEach(function(f) {

      var src = path.join(inputDir, (typeof f === 'string')? f : f.src);
      var dst = path.join(outputDir, (typeof f === 'string')? f : f.dst);

      if (grunt.file.isDir(src)) {
        grunt.file.recurse(src, function(abspath, rootdir, subdir, filename) {
          grunt.file.copy(abspath, path.join(dst, subdir || '', filename));
        });
      } else {
        grunt.file.copy(src, dst);
      }

    });
  });

};
