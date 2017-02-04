module.exports = function(grunt) {
  'use strict';

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
    },
  });
};
