var gulp = require('gulp'),
    sassdoc = require('sassdoc');

// Declare input, output and sourcemaps path
var path = {
  input: './scss/**/*.scss'
};

// Declare sassdoc options
var sassdocOptions = {
  dest: './docs/'
};

// Gulp Task for Create Documentation
gulp.task('docs', function () {
  return gulp
      .src(path.input)
      .pipe(sassdoc(sassdocOptions))
      .resume();
});