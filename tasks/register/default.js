var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('default', function(cb) {
    async.eachSeries([
      'syncAssets',
      'watch'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
