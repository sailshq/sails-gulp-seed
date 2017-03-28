module.exports = function(sails) {
  return {

    initialize: function (cb) {

      var gulp = require('gulp');
      require('../../../gulpfile');
      if (process.env.NODE_ENV === 'production') {
        gulp.start('prod', cb);
        return;
      }

      gulp.start('default', cb);

    }

  };
};
