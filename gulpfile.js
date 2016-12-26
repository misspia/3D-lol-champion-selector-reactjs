var gulp = require('gulp');
var sass = require('gulp-sass');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');


gulp.task('sass', function(){
  return gulp.src('src/styles/main.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('src/styles'));
});

gulp.task('vendor-prefix', function () {
    var processors = [
	  autoprefixer,
	  cssnext,
	  precss
	];
    return gulp.src('src/styles/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('src/styles'));
});
