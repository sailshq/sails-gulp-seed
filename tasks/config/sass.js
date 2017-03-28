/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/index.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * Info: sass:prod isn't live-reloading the server
 *
 */

var sassPlugin = require('gulp-sass');
var renamePlugin = require('gulp-rename');
var sourcemapsPlugin = require('gulp-sourcemaps');
module.exports = function(gulp) {

  gulp.task('sass:dev', function(cb) {
    return gulp.src('assets/styles/importer.scss')
      .pipe(sourcemapsPlugin.init())
      .pipe(sassPlugin({
        outputStyle: 'compressed'
      }).on('error', cb))
      .pipe(sourcemapsPlugin.write())
      .pipe(gulp.dest('.tmp/public/styles/'))
      .on('end', cb)
      .on('error', cb);

  });

  gulp.task('sass:prod', function(cb) {
    return gulp.src('assets/styles/importer.scss')
      .pipe(sourcemapsPlugin.init())
      .pipe(sassPlugin({
        outputStyle: 'compressed'
      }).on('error', cb))
      .pipe(sourcemapsPlugin.write())
      .pipe(renamePlugin('compiledSass.css'))
      .pipe(gulp.dest('.tmp'))
      .on('end', cb)
      .on('error', cb);

  });
};
