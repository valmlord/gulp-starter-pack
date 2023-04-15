import gulp from 'gulp';
import browserSync from 'browser-sync';

// Configuration
import path from './config/path.js';
import app from './config/app.js';

// Tasks
import clear from './task/clear.js';
import html from './task/html.js';
import css from './task/css.js';

// Static server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Change Tracking
const watcher = () => {
  gulp.watch(path.html.watch, html).on('all', browserSync.reload);
  gulp.watch(path.css.watch, css).on('all', browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(html, css));
const dev = gulp.series(build, gulp.parallel(server, watcher));

// Public Tasks
export { html, css };

// Assembly
export default app.isProd ? build : dev;