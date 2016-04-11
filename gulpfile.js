var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

gulp.task('sass', function() {
  console.log('Building styles.css…');
  gulp.src('./src/sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch', function () {
    watch('./src/sass/*', batch(function (events, done) {
        gulp.start('sass', done);
    }));
});

gulp.task('default', ['watch']);
