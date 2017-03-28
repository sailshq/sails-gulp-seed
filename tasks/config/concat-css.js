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
var cssMinPlugin = require('gulp-cssmin');
var renamePlugin = require('gulp-rename');
module.exports = function(gulp) {

  gulp.task('concat-css', function(cb) {
    return gulp.src(require('../pipeline').cssFilesToInject.concat(['.tmp/compiledSass.css']))
      .pipe(concatPlugin('production.css'))
      .pipe(cssMinPlugin())
      .pipe(renamePlugin({ suffix: '.min' }))
      .pipe(gulp.dest('./.tmp/concat/styles'))
      .on('end', cb)
      .on('error', cb);

  });

};

