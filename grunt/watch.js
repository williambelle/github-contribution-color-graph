module.exports = {
  build: {
    files: [
      'src/**/*',
      'test/**/*',
    ],
    tasks: ['build'],
  },
  options: {
    livereload: true,
  },
};
