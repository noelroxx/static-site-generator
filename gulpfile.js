var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jade = require('gulp-jade'),
  less = require('gulp-less'),
  coffee = require('gulp-coffee');


gulp.task('webserver', function() {
  connect.server({
    root: ['.', '.dist']
  });
});

gulp.task('templates', function() {
  gulp.src('./app/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('.dist/'));
});

gulp.task('less', function() {
  gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('.dist/css'))
});

gulp.task('coffee', function() {
  gulp.src('scripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.dist/js'));
});

gulp.task('watch', function () {
   gulp.watch('./app/*.jade', ['templates']);
});

gulp.task('default', ['templates', 'less', 'coffee', 'webserver', 'watch']);

