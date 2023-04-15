import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import webpCss from "gulp-webp-css";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import size from "gulp-size";
import csso from "gulp-csso";
import rename from 'gulp-rename';

// CSS processing
export default () => {
  return gulp
    .src(path.css.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "CSS",
          message: error.message,
        })),
      })
    )
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(csso())
    .pipe(rename({ suffix: ".min" }))
    .pipe(size({ title: "main.min.css" }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: app.isDev }));
};
