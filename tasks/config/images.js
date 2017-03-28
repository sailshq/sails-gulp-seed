/**
 * Copies images to .tmp/images after compressing them.
 *
 * ---------------------------------------------------------------
 *
 *
 */
module.exports = function(gulp) {
  gulp.task('images', function(cb) {
    (gulp.src('assets/images/**/*')
      .pipe(gulp.dest('.tmp/public/images')))
      .on('end', cb)
      .on('error', cb);



  });

  gulp.task('images:prod', function(cb) {
    gulp.src('assets/images/**/*')
      .pipe(gulp.dest('.tmp/public/images'))
      .on('end', cb)
      .on('error', cb);

  });
};
