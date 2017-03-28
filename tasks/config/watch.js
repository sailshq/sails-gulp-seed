/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 *
 */
module.exports = function(gulp) {

  // Watch API files
  // NOTE This watcher is set-up by the sails-hook-autoreload NPM package

  // Watch assets
  gulp.task('watch', function(cb) {
    var watcher = gulp.watch('assets/**/*');
    watcher.on('change', function(err) {
      try {
        gulp.start('syncAssets');
      } catch(e) {
      }
    });
    return cb();
  });

};
