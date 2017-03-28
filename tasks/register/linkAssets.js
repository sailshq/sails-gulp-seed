var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('linkAssets', function(cb) {
    runSequence(
      'sails-linker-gulp:devAssets',
      'sails-linker-gulp:devViews',
      cb);
  });
};
