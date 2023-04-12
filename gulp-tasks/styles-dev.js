import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'

const sass = require('gulp-sass')(require('sass'))


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
  cascade: false
};

// Gulp Task for Styles on Development Mode
gulp.task('styles-dev', function () {
  console.log('Development already started and lets see the magics...');
  return gulp
    .src(path.input)
    .pipe(sourcemaps.init())
    .pipe(gulpSass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write(path.sourcemaps))
    .pipe(gulp.dest(path.output));
});
