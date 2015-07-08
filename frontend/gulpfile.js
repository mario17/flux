/**
 * Archivo de configuración de gulp
 * 
 * @extends Gulp
 * @extends Config
 * @extends Path
 * @extends Plugins
 * @extends Functions
 * @extends Task
 * @author Victor Sandoval
 */

var gulp      =  require('gulp-param')(require('gulp'), process.argv),
    path      = require('./config/path'),
    config    = require('./config/config.local'),
    plugins   = require('./config/plugins'),
    functions = require('./config/functions');

var runTask = function (nameTask){
  var Task = require("./config/tasks/" + nameTask);
  new Task(gulp, path, config, plugins, functions);
};

runTask("gulp_clean");
runTask("gulp_copy");
runTask("gulp_styles");
runTask("gulp_sprite");
runTask("gulp_fonts");
runTask("gulp_html");
runTask("gulp_icons");
runTask("gulp_js");
runTask("gulp_watch");
runTask("gulp_bower");
runTask("gulp_mocha");

gulp.task('default', ['clean'], function (cb) {
  plugins.runSequence('copy', 'fonts', 'icons', 'sprites', 'styles:all', 'js:all', cb);
});
