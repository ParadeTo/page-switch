var gulp = require('gulp'),
		 del = require('del'),
		 rename = require('gulp-rename'),
		 connect = require('gulp-connect'),
		 uglify = require('gulp-uglify'),
		 renSequence = require('gulp-run-sequence'),
		 less = require('gulp-less');

gulp.task('clean', function() {
	return del('./dist');
});

gulp.task('connect', function() {
	return connect.server({
		livereload:true
	});
});

gulp.task('reloadAsset',function() {
	return gulp.src(['./dist/*'])
		.pipe(connect.reload());
});

gulp.task('reloadHtml',function() {
	return gulp.src(['./demo/*.html'])
		.pipe(connect.reload());
});

gulp.task('watchAsset',function() {
	return gulp.watch(['./src/*'],['less','js','reloadAsset']);
});

gulp.task('watchHtml',function() {
	return gulp.watch(['./demo/*.html'],['reloadHtml']);
});

gulp.task('less',function() {
	return gulp.src('./src/**/*.less')
		.pipe(less({outputStyle:'compressed'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('js',function() {
	return gulp.src('./src/**/*.js')
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./dist/'));
})

gulp.task('default',['clean'],function(cb){
	renSequence('less','js',['connect','watchAsset','watchHtml'],cb);
});
