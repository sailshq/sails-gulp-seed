var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('build', function (cb) {
    runSequence(
      'compileAssets:dev',
      'linkAssetsBuild',
      'clean:build',
      'copy:build',
      cb);
  });

  gulp.task('build:prod', function (cb) {
    runSequence(
      'compileAssets:prod',
      'linkAssetsBuild:prod',
      'clean:build',
      'copy:build',
      cb);
  });
};
