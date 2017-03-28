/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 *
 */
var concatPlugin = require('gulp-concat');
var uglifyPlugin = require('gulp-uglify');
var renamePlugin = require('gulp-rename');
module.exports = function(gulp) {

  gulp.task('concat-js', function(cb) {
    gulp.src(require('../pipeline').jsFilesToInject)
      .pipe(concatPlugin('production.js'))
      .pipe(uglifyPlugin())
      .pipe(renamePlugin({ suffix: '.min' }))
      .pipe(gulp.dest('./.tmp/concat/js'))
      .on('end', cb)
      .on('error', cb);

  });

};

