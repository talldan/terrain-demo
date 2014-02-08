var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var lr = require('tiny-lr');
var refresh = require('gulp-livereload');
var reloadServer = lr();

gulp.task('default', ['clean'], function() {
	gulp.start('js', 'html');

	gulp.watch('src/js/**', function(event) {
		gulp.start('js');
	});

	gulp.watch('src/html/**', function(event) {
		gulp.start('html');
	});
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
//		.pipe(refresh(reloadServer));
});

gulp.task('html', function() {
	gulp.src('./src/html/index.html')
		.pipe(gulp.dest('./build'));
//		.pipe(refresh(reloadServer));
});

gulp.task('livereload', function() {
	reloadServer.listen(35729, function(err) {
		if 	(err) {
			return console.log(err);
		}
	});
});