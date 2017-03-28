var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('compileAssets:dev', function(cb) {
    async.eachSeries([
      'clean:dev',
      'jst:dev',
      'sass:dev',
      'coffee',
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
      'clean:compiledSass',
      'clean:concat',
      'jst:dev',
      'sass:prod',
      'copy:dev',
      'coffee',
      'concat-css',
      'concat-js',
      'clean:dev',
      'copy:prod'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
