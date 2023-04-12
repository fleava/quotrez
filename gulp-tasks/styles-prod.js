import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import rename from 'gulp-rename'

const sass = require('gulp-sass')(require('sass'))

// Declare input, output and sourcemaps path
var path = {
  input: './scss/**/*.scss',
  output: './dist/css/'
};

// Declare autoprefixer options
var autoprefixerOptions = {
  cascade: false
};

// Gulp Task for Production
gulp.task('styles-prod', function () {
  console.log('Ready and go publish with well documented...');
  return gulp
    .src(path.input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))

    // output the minified version
    .pipe(cssnano({
      discardComments: { removeAll: true }
    }))
    .pipe(rename({
      basename: 'quotrez',
      extname: '.min.css'
    }))
    .pipe(gulp.dest(path.output));
});
