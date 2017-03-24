var async = require('async');

module.exports = function (gulp, plugins) {
  gulp.task('linkAssetsBuild', function(cb) {
    async.eachSeries([
      'sails-linker-gulp:devAssetsRelative',
      'sails-linker-gulp:devViewsRelative'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });

  gulp.task('linkAssetsBuild:prod', function(cb) {
    async.eachSeries([
      'sails-linker-gulp:prodAssetsRelative',
      'sails-linker-gulp:prodViewsRelative'
    ], function(task, nextTask) {
      gulp.task(task)(nextTask);
    }, cb);
  });
};
