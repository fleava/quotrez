import gulp from 'gulp'
import livereload from 'gulp-livereload'
import requireDir from 'require-dir'

requireDir('./gulp-tasks')

// Declare input, output and sourcemaps path
var path = {
  dist: './dist/',
  input_styles: './scss/**/*.scss',
  output: './dist/css/'
};


// Say hello to Quotrez Visual Framework
gulp.task('hello', function () {
  console.log('Hello Quotrez');
});


// Gulp Task for Development Watching
gulp.task('watch', function () {

  // Watch *.scss files
  gulp.watch(path.input_styles, gulp.series('styles-dev'));

  livereload.listen();

  gulp.watch([path.dist]).on('change', livereload.changed);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', gulp.series(
  'hello',
  'clean',
  'styles-dev',
  'styles-prod',
  'docs',
  'watch'
));
