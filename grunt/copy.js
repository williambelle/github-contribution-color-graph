'use strict';

module.exports = function (grunt, options) {
  return {
    buildChrome: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['js/**', 'css/**', 'images/**', '*.html', 'manifest.json'],
        dest: 'dist/chrome/',
        nonull: true
      }]
    },
    buildFirefox: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['js/**', 'css/**', 'images/**', '*.html'],
        dest: 'dist/firefox/',
        nonull: true
      }, {
        expand: true,
        cwd: 'src/',
        src: ['manifest.firefox.json'],
        dest: 'dist/firefox/',
        nonull: true,
        rename: function (destBase, destPath) {
          return destBase + destPath.replace(
            'manifest.firefox.json', 'manifest.json'
          );
        }
      }]
    }
  };
};
