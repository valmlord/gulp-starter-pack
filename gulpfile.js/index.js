global.$ = {
  // Packages
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),

  // Config
  path: require('./config/path.js'),
  app: require('./config/app.js'),
};

// Tasks
const requireDir = require('require-dir');

const task = requireDir('./task', { recurse: true });

// Change Tracking
const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html).on('all', $.browserSync.reload);
  $.gulp.watch($.path.scss.watch, task.scss).on('all', $.browserSync.reload);
  $.gulp.watch($.path.js.watch, task.js).on('all', $.browserSync.reload);
  $.gulp.watch($.path.img.watch, task.img).on('all', $.browserSync.reload);
  $.gulp.watch($.path.font.watch, task.font).on('all', $.browserSync.reload);
  $.gulp.watch($.path.favicon.watch, task.favicon).on('all', $.browserSync.reload);
};

const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(
    task.html,
    task.scss,
    task.js,
    task.img,
    task.font,
    task.favicon,
  ),
);

const dev = $.gulp.series(build, $.gulp.parallel(task.server, watcher));

// Public Tasks
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;
exports.favicon = task.favicon;

// Assembly
exports.default = $.app.isProd ? build : dev;
