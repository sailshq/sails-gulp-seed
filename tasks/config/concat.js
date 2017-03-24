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
var renamePlugin = require('gulp-rename');
var uglifyPlugin = require('gulp-uglify');
module.exports = function(gulp) {

  gulp.task('concat', function(cb) {
    return gulp.src(require('../pipeline').jsFilesToInject)
      .pipe(concatPlugin('production.js'))
      .pipe(renamePlugin({ suffix: '.min' }))
      .pipe(uglifyPlugin(/* {mangle: true} */))
      .pipe(gulp.dest('./.tmp/public/concat'))
      .on('end', cb)
      .on('error', cb);

  });

};

