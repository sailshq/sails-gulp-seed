/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 */
var rimraf = require('rimraf');
module.exports = function(gulp) {
  gulp.task('clean:dev', function(cb) {
    rimraf('.tmp/public', cb);
  });
  gulp.task('clean:compiledSass', function(cb) {
    rimraf('.tmp/compiledSass.css', cb);
  });
  gulp.task('clean:concat', function(cb) {
    rimraf('.tmp/concat', cb);
  });
  gulp.task('clean:build', function(cb) {
    rimraf('www', cb);
  });
};
