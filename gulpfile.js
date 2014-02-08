var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');

gulp.task('default', ['clean'], function() {
   gulp.start('js', 'html');
});

gulp.task('clean', function() {
   gulp.src('./build/**/*')
       .pipe(clean());
});

gulp.task('js', function () {
    gulp.src('./src/js/app.js')
        .pipe(browserify({
//            debug: gulpUtil.env.type !== 'production'
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('html', function() {
	gulp.src('./src/html/index.html')
		.pipe(gulp.dest('./build'));
});