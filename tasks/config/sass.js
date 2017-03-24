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
      .pipe(renamePlugin({
        basename: 'production',
        suffix: '.min'
      }))
      .pipe(
        sassPlugin({
          outputStyle: 'compressed',
          ext: '.css'
        }).on('error', cb)
      )
      .pipe(gulp.dest('.tmp/public/concat/'))
      .on('end', cb)
      .on('error', cb);

  });
};
