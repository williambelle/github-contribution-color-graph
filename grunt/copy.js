module.exports = function(grunt, options) {
  'use strict';

  return {
    buildChrome: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['js/**', 'images/**', 'manifest.json'],
        dest: 'dist/chrome/',
        nonull: true,
      },],
    },
    buildFirefox: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['js/**', 'images/**',],
        dest: 'dist/firefox/',
        nonull: true,
      },{
        expand: true,
        cwd: 'src/',
        src: ['manifest.firefox.json',],
        dest: 'dist/firefox/',
        nonull: true,
        rename: function(destBase, destPath) {
          return destBase + destPath.replace(
            'manifest.firefox.json', 'manifest.json'
          );
        },
      },],
    },
  };
};
