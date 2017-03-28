/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files. Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 *
 */

var linkerPlugin = require('gulp-linker');

module.exports = function(gulp) {

  // Insert JS, CSS and template dev links into HTML files in the tmp assets folder
  gulp.task('sails-linker-gulp:devAssets', function(cb) {
    // Read Templates
    gulp.src('.tmp/public/**/*.html')
      // Link the javaScript
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').jsFilesToInject],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').cssFilesToInject],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('.tmp/public/'))
      .on('end', cb)
      .on('error', cb);

  });

  // Insert JS, CSS and template dev links into HTML and HANDLEBARS files in the views folder
  gulp.task('sails-linker-gulp:devViews', function(cb) {

    // Read templates
    gulp.src(['views/**/*.html', 'views/**/*.handlebars', 'views/**/*.ejs'])

      // Link the javaScript
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').jsFilesToInject],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').cssFilesToInject],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('views/'))
      .on('end', cb)
      .on('error', cb);
});

  // Insert relative JS, CSS and template dev links into HTML files in the tmp assets folder
  gulp.task('sails-linker-gulp:devAssetsRelative', function(cb) {
    // Read templates
    gulp.src('.tmp/public/**/*.html')
      // Link the JavaScript
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').jsFilesToInject],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').cssFilesToInject],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('.tmp/public/'))
      .on('end', cb)
      .on('error', cb);

  });

  // Insert relative JS, CSS and template dev links into HTML and HANDLEBARS files in the views folder
  gulp.task('sails-linker-gulp:devViewsRelative', function(cb) {
    // Read templates
    gulp.src(['views/**/*.html', 'views/**/*.handlebars', 'views/**/*.ejs'])
      // Link the javaScript
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').jsFilesToInject],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: [require('../pipeline').cssFilesToInject],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('views/'))
      .on('end', cb)
      .on('error', cb);

  });

  // Insert JS, CSS and template production links into HTML files in the tmp assets folder
  gulp.task('sails-linker-gulp:prodAssets', function(cb) {
    // Read templates
    gulp.src('.tmp/public/**/*.html')
      // Link the JavaScript
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/js/production.min.js'],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/styles/production.min.css'],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('.tmp/public/'))
      .on('end', cb)
      .on('error', cb);

  });

  // Insert JS, CSS and template production links into HTML and HANDLEBARS files in the views folder
  gulp.task('sails-linker-gulp:prodViews', function(cb) {
    // Read templates
    gulp.src(['views/**/*.html', 'views/**/*.handlebars', 'views/**/*.ejs'])
      // Link the JavaScript
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/js/production.min.js'],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/styles/production.min.css'],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('views/'))
      .on('end', cb)
      .on('error', cb);

  });

  // Insert relative JS, CSS and template production links into HTML files in the tmp assets folder
  gulp.task('sails-linker-gulp:prodAssetsRelative', function(cb) {
    // Read templates
    gulp.src('.tmp/public/**/*.html')
      // Link the JavaScript
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/js/production.min.js'],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/styles/production.min.css'],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('.tmp/public/'))
      .on('end', cb)
      .on('error', cb);

  });

  // Insert relative JS, CSS and template production links into HTML and HANDLEBARS files in the views folder
  gulp.task('sails-linker-gulp:prodViewsRelative', function(cb) {
    // Read templates
    gulp.src(['views/**/*.html', 'views/**/*.handlebars', 'views/**/*.ejs'])
      // Link the JavaScript
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/js/production.min.js'],
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the styles
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/styles/production.min.css'],
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public',
        relative: true
      }))
      // Link the JST Templates
      .pipe(linkerPlugin({
        scripts: ['.tmp/public/jst.js'],
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      }))
      // Write modified files...
      .pipe(gulp.dest('views/'))
      .on('end', cb)
      .on('error', cb);

  });

};
