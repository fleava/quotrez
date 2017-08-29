var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

// Declare input, output and sourcemaps path
var path = {
  input: './scss/**/*.scss',
  output: './dist/css/'
};

// Declare autoprefixer options
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
  cascade: false
};

// Gulp Task for Production
gulp.task('styles-prod', function() {
  console.log('Ready and go publish with well documented...');
  return gulp
      .src(path.input)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(autoprefixer(autoprefixerOptions))

      // output the minified version
      .pipe(cssnano({
        discardComments: {removeAll: true}
      }))
      .pipe(rename({
        basename: 'quotrez',
        extname: '.min.css'
      }))
      .pipe(gulp.dest(path.output));
});