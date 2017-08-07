"use strict"

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


//html
gulp.task('html', () => {
  return gulp.src('./**/*.html')
    .pipe(connect.reload());
});


// scss
const sass = require('gulp-sass');

gulp.task('scss', () => {
  return gulp.src(`./assets/scss/main.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`./assets/css/`))
    .pipe(connect.reload());
});


// js
gulp.task('js', () => {
  return gulp.src(`./assets/js/**/*.js`)
    .pipe(connect.reload());
});


//connect server
const connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8080
  });
});

//watch
gulp.task('watch', function() {
  gulp.watch(['./**/*.html'], ['html']);
  gulp.watch(['./assets/scss/**/*.scss'], ['scss']);
  gulp.watch(['./assets/js/**/*.js'], ['js']);
});

//default
gulp.task('default', ['connect', 'html', 'scss', 'js', 'watch']);