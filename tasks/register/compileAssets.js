module.exports = function (gulp, plugins) {
  gulp.task('compileAssets', function(cb) {
    async.eachSeries([
      'clean:dev',
      'jst:dev',
      'sass:dev',
      'copy:dev'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, function(err) {
      if (err) { console.error(err); }
      return cb();
    });
  });

  gulp.task('compileAssets:prod', function(cb) {
    async.eachSeries([
      'clean:dev',
      'clean:build',
      'jst:dev',
      'sass:prod',
      'copy:build'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
