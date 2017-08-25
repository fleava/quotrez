var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

// Declare input, output and sourcemaps path
var path = {
  input: './scss/**/*.scss',
  output: './dist/css/',
  sourcemaps: '.'
};

// Declare sass options
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Declare autoprefixer options
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
  cascade: false
};

// Gulp Task for Styles on Development Mode
gulp.task('styles-dev', function () {
  console.log('Development already started and lets see the magics...');
  return gulp
      .src(path.input)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(sourcemaps.write(path.sourcemaps))
      .pipe(gulp.dest(path.output));
});