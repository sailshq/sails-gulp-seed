var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('prod', function(cb) {
    runSequence(
      'compileAssets:prod',
      'sails-linker-gulp:prodAssets',
      'sails-linker-gulp:prodViews',
      cb);
  });
};
