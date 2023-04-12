// HTML processing
const html = () => $.gulp.src($.path.html.src)
  .pipe($.gp.plumber({
    errorHandler: $.gp.notify.onError((error) => ({
      title: 'HTML',
      message: error.message,
    })),
  }))
  .pipe($.gp.fileInclude())
  .pipe($.gp.webpHtml())
  .pipe($.gp.size({ title: 'Before Compression' }))
  .pipe($.gp.htmlmin($.app.htmlmin))
  .pipe($.gp.size({ title: 'After Compression' }))
  .pipe($.gulp.dest($.path.html.dest))
  .pipe($.browserSync.stream());

module.exports = html;
