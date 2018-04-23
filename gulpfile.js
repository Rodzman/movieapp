var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var uglifycss = require('gulp-uglifycss');

gulp.task('default', ['compileBootstrap', 'lib']);

gulp.task('w', function(){
  gulp.watch('./src/assets/styles/**/*', ['compileBootstrap']);
});

gulp.task('compileBootstrap', () =>
  gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
  .pipe(customizeBootstrap('./src/assets/styles/scss/*.scss'))
  .pipe(sass())
  .pipe(uglifycss())
  .pipe(gulp.dest('./src/assets/styles/css'))
);

gulp.task('lib', () =>
  gulp.src(['node_modules/jquery/dist/jquery.min.js'])
  .pipe(concat('lib.js'))
  .pipe(gulp.dest('./src/assets/js'))
);

