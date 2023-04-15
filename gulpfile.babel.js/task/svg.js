import gulp from 'gulp';

// Plugins
import loadPlugins from 'gulp-load-plugins';

// Config
import path from '../config/path';
import app from '../config/app';

// SVG processing
const gp = loadPlugins();
const svg = () => gulp.src(path.svg.src)
  .pipe(
    gp.plumber({
      errorHandler: gp.notify.onError((error) => ({
        title: 'SVG',
        message: error.message,
      })),
    }),
  )
  .pipe(gp.svgmin(app.spriteSvg.svgmin))
  .pipe(gp.cheerio(app.spriteSvg.cheerio))
  .pipe(gp.replace('&gt;', '>'))
  .pipe(gp.svgSprite(app.spriteSvg.svgSprite))
  .pipe(gulp.dest(path.svg.dest));

export default svg;
