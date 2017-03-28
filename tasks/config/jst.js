/**
 * Precompiles Underscore templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes HTML files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 *
 */

var templateCompilePlugin = require('gulp-template-compile');
var concatPlugin = require('gulp-concat');

module.exports = function(gulp) {
  gulp.task('jst:dev', function(cb) {
    gulp.src(require('../pipeline').templateFilesToInject)
      .pipe(templateCompilePlugin({
        name: function(file) {
          return 'assets/templates/' + file.relative;
        }
      }))
      .pipe(concatPlugin('jst.js'))
      .pipe(gulp.dest('.tmp/public'))
      .on('end', cb)
      .on('error', cb);

  });
};
