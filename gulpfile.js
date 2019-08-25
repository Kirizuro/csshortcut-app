const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

gulp.task('pug', function(done) {
  gulp
    .src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out'))
    .pipe(connect.reload());
  done();
});

gulp.task('stylus', function(done) {
  gulp
    .src('./src/assets/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./out/assets/styles/'))
    .pipe(connect.reload());
  done();
});

gulp.task('imagemin', function(done) {
  gulp
    .src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./out/assets/images/'));
  done();
});

gulp.task('watch', function(done) {
  gulp.watch(
    ['./src/*.pug', './src/imports/*.pug', './src/layouts/*.pug'],
    gulp.parallel(['pug'])
  );
  gulp.watch('./src/assets/styles/*.styl', gulp.parallel(['stylus']));
  done();
});

gulp.task('serve', function(done) {
  connect.server({
    root: './out',
    livereload: true
  });
  done();
});

gulp.task('build', gulp.parallel('stylus', 'pug', 'imagemin'));
gulp.task('server', gulp.parallel('serve', 'watch'));
