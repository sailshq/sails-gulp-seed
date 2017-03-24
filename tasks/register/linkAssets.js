var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('linkAssets', function(cb) {
    async.eachSeries([
      'sails-linker-gulp:devAssets',
      'sails-linker-gulp:devViews'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
