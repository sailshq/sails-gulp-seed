var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('default', function(cb) {
    runSequence(
      'syncAssets',
      'watch',
      cb);
  });
};
