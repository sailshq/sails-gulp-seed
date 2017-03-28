var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  gulp.task('compileAssets:dev', function(cb) {
    runSequence(
      'clean:dev',
      'jst:dev',
      'sass:dev',
      'coffee',
      'copy:dev',
      cb
    );
  });

  gulp.task('compileAssets:prod', function(cb) {
    runSequence(
      'clean:dev',
      'clean:compiledSass',
      'clean:concat',
      'jst:dev',
      'sass:prod',
      'copy:dev',
      'coffee',
      'concat-css',
      'concat-js',
      'clean:dev',
      'copy:prod',
      cb);
  });
};
