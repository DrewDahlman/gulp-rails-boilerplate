var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src([
  	'public/**/*', 
  	'!public/*.html', 
  	'!public/css', 
  	'!public/css/**/*', 
  	'!public/js', 
  	'!public/js/**/*', 
  	'!public/vendor', 
  	'!public/vendor/**/*'
  	])
  	.pipe(gulp.dest('dist/'));

  gulp.src('src/styles/fonts/**/*')
    .pipe(gulp.dest('dist/styles/fonts'))
    .pipe(gulp.dest('public/css/fonts'));
});