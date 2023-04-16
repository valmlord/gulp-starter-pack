// eslint-disable-next-line import/no-extraneous-dependencies
import gulp from 'gulp';
// eslint-disable-next-line import/no-extraneous-dependencies
import browserSync from 'browser-sync';

// Configuration
import path from './config/path';
import app from './config/app';

// Tasks
import clear from './task/clear';
import html from './task/html';
import pug from './task/pug';
import css from './task/css';
import scss from './task/scss';
import js from './task/js';
import font from './task/fonts';
import img from './task/img';
import svg from './task/svg';
import favicon from './task/favicon';

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
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
  gulp.watch(path.css.watch, css).on('all', browserSync.reload);
  gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
  gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  gulp.watch(path.font.watch, font).on('all', browserSync.reload);
  gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  gulp.watch(path.svg.watch, svg).on('all', browserSync.reload);
  gulp.watch(path.favicon.watch, favicon).on('all', browserSync.reload);
};

const build = gulp.series(
  clear,
  gulp.parallel(html, pug, css, scss, js, font, img, svg, favicon),
);
const dev = gulp.series(build, gulp.parallel(server, watcher));

// Public Tasks
export { html, pug, css, scss, js, font, img, svg, favicon };

// Assembly
export default app.isProd ? build : dev;
