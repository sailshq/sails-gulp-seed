var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('syncAssets', function(cb) {
    async.eachSeries([
      'compileAssets:dev',
      'linkAssets'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
