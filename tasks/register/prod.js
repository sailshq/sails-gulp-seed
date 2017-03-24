var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('prod', function(cb) {
    async.eachSeries([
      'compileAssets:prod',
      'concat',
      'sails-linker-gulp:prodAssets',
      'sails-linker-gulp:prodViews',
      'images:prod'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
