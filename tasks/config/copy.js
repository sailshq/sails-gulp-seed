/**
 * Copy files and folders.
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies modulesToCopy array content
 * Copies all directories and files, except sass files, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies modulesToCopy array content
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 */

module.exports = function(gulp) {
  gulp.task('copy:dev', function(cb) {
    return gulp.src(['./assets/**/*.!(scss)', '!assets/images{,/**}'])
      .pipe(gulp.dest('.tmp/public'))
      .on('end', cb)
      .on('error', cb);

  });

  gulp.task('copy:build', function(cb) {
    return gulp.src(['./.tmp/public/**/*'])
      .pipe(gulp.dest('www'))
      .on('end', cb)
      .on('error', cb);

  });
};
