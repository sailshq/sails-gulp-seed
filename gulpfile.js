/**
 * Gulpfile
 *
 * This Node script is executed when you run `gulp` or `sails lift`.
 * It's purpose is to load the Gulp tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder. Module gulp-load-plugins is now needed.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */
var gulp = require('gulp'),
  path = require('path'),
  growl = false;

// Load the include-all library in order to require all of our gulp
// configurations and task registrations dynamically.
var includeAll;
try {
  includeAll = require('include-all');
} catch (e0) {
  try {
    includeAll = require('sails/node_modules/include-all');
  }
  catch(e1) {
    console.error('Could not find `include-all` module.');
    console.error('Skipping gulp tasks...');
    console.error('To fix this, please run:');
    console.error('npm install include-all --save`');
    console.error();

    gulp.task('default', []);
    return;
  }
}


/**
 * Loads Gulp configuration modules from the specified
 * relative path. These modules should export a function
 * that, when run, should either load/configure or register
 * a Gulp task.
 */
function loadTasks(relPath) {
  var filter = /(.+)\.js$/;
  return includeAll({
      dirname: require('path').resolve(__dirname, relPath),
      filter: filter
    }) || {};
}

/**
 * Invokes the function from a Gulp configuration module with
 * a single argument - the `gulp` object.
 */
function invokeConfigFn(tasks) {
  for (var taskName in tasks) {
    if (tasks.hasOwnProperty(taskName)) {
      tasks[taskName](gulp);
    }
  }
}




// Load task functions
var taskConfigurations = loadTasks('./tasks/config'),
  registerDefinitions = loadTasks('./tasks/register');

// (ensure that a default task exists)
if (!registerDefinitions.default) {
  registerDefinitions.default = function (gulp) { gulp.task('default', []); };
}

// Run task functions to configure Gulp.
invokeConfigFn(taskConfigurations);
invokeConfigFn(registerDefinitions);

