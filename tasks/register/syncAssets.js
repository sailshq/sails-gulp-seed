var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('syncAssets', function(cb) {
    runSequence(
      'compileAssets:dev',
      'linkAssets',
      cb);
  });
};
