// todo: get it working properly.
/**
 * A gulp task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 *
 */

var changedPlugin = require('gulp-changed');

module.exports = function(gulp) {
  gulp.task('sync:dev', function(cb) {
    gulp.src(['./assets/**/*.!(scss)', '!assets/images{,/**}'])
      .pipe(changedPlugin('.tmp/public'))
      .pipe(gulp.dest('.tmp/public'))
      .on('end', cb)
      .on('error', cb);

  });
};
