// Favicon processing
const favicon = () => $.gulp.src($.path.favicon.src)
  .pipe($.gp.plumber({
    errorHandler: $.gp.notify.onError((error) => ({
      title: 'Favicon',
      message: error.message,
    })),
  }))
  .pipe($.gulp.dest($.path.favicon.dest))
  .pipe($.gp.favicons($.app.favicons))
  .pipe($.gulp.dest($.path.favicon.dest))
  .pipe($.gp.filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
  .pipe($.gulp.dest($.path.root));

module.exports = favicon;
