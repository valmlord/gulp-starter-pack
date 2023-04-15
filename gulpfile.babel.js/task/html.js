import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileinclude from "gulp-file-include";
import webpHtml from "gulp-webp-html";
import size from "gulp-size";
import htmlmin from "gulp-htmlmin";

// HTML processing
export default () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileinclude())
    .pipe(webpHtml())
    .pipe(size({ title: "Before Compression" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "After Compression" }))
    .pipe(gulp.dest(path.html.dest));
};
