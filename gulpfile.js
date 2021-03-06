var gulp = require('gulp');
var sass = require('gulp-sass');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

imagemin = require('gulp-imagemin');
require('events').EventEmitter.prototype._maxListeners = 100;


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


gulp.task('minify-splash', function() {
    return gulp.src('src/img/splash/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/img/splash'))
})
gulp.task('minify-preview', function() {
    return gulp.src('src/img/preview/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/img/preview'))
})