var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('build', function (cb) {
    async.eachSeries([
      'compileAssets',
      'linkAssetsBuild',
      'clean:build',
      'copy:build'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });

  gulp.task('build:prod', function (cb) {
    async.eachSeries([
      'compileAssets:prod',
      'concat',
      'linkAssetsBuild:prod',
      'clean:build',
      'copy:build'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
