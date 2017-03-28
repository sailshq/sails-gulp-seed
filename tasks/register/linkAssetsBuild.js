var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('linkAssetsBuild', function(cb) {
    runSequence(
      'sails-linker-gulp:devAssetsRelative',
      'sails-linker-gulp:devViewsRelative',
      cb);
  });

  gulp.task('linkAssetsBuild:prod', function(cb) {
    runSequence(
      'sails-linker-gulp:prodAssetsRelative',
      'sails-linker-gulp:prodViewsRelative',
      cb);
  });
};
