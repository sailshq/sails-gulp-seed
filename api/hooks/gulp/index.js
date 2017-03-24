module.exports = function(sails) {
  return {

    initialize: function (cb) {

      var gulp = require('gulp');
      require('../../../gulpfile');
      if (process.env.NODE_ENV === 'production') {
        gulp.task('prod')(cb);
        return;
      }

      gulp.task('default')(cb);

    }

  };
};
