'use strict';

module.exports = function (grunt, options) {
  return {
    chrome: {
      options: {
        archive: 'package/chrome-v' + options.package.version + '.zip'
      },
      files: [{
        src: '**/*',
        cwd: 'dist/chrome/',
        dest: '',
        expand: true
      }]
    },
    firefox: {
      options: {
        archive: 'package/firefox-v' + options.package.version + '.zip'
      },
      files: [{
        src: '**/*',
        cwd: 'dist/firefox/',
        dest: '',
        expand: true
      }]
    }
  };
};
