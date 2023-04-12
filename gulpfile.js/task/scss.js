const sass = $.gp.sass(require('sass'));

// SCSS processing
const scss = () => $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
  .pipe($.gp.plumber({
    errorHandler: $.gp.notify.onError((error) => ({
      title: 'SCSS',
      message: error.message,
    })),
  }))
  .pipe($.gp.sassGlob())
  .pipe(sass())
  .pipe($.gp.webpCss())
  .pipe($.gp.autoprefixer())
  .pipe($.gp.shorthand())
  .pipe($.gp.groupCssMediaQueries())
  .pipe($.gp.size({ title: 'main.css' }))
  .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
  .pipe($.gp.csso())
  .pipe($.gp.rename({ suffix: '.min' }))
  .pipe($.gp.size({ title: 'main.min.css' }))
  .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
  .pipe($.browserSync.stream());

module.exports = scss;
