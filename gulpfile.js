var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var uglifycss = require('gulp-uglifycss');

gulp.task('default', ['app-scss', 'lib']);

gulp.task('w', function () {
  gulp.watch('./src/assets/styles/**/*', ['app-scss']);
});

// task to app scss
gulp.task('app-scss', function() {
  return gulp.src(['node_modules/normalize.css/normalize.css', 'node_modules/bootstrap/scss/**/*.scss', 'src/assets/styles/scss/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  // .pipe(uglifycss())
  .pipe(concat('app.css'))
  .pipe(gulp.dest('src/assets/styles/css'));
});

gulp.task('lib', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/assets/js/fontawesome-all.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./src/assets/js'));
});


