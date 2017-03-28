/**
 * `tasks/config/coffee`
 *
 * ---------------------------------------------------------------
 *
 * Compile CoffeeScript files located in `assets/js` into Javascript
 * and generate new `.js` files in `.tmp/public/js`.
 *
 */

var coffeePlugin = require('gulp-coffee');

module.exports = function(gulp) {
  gulp.task('coffee', function(cb) {
    gulp.src('assets/**/*.coffee')
      .pipe(coffeePlugin({
        bare: true
      }))
      .pipe(gulp.dest('.tmp/public'))
      .on('end', cb)
      .on('error', cb);
  });
};
