var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('prod', function(cb) {
    async.eachSeries([
      'compileAssets:prod',
      'sails-linker-gulp:prodAssets',
      'sails-linker-gulp:prodViews',
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
