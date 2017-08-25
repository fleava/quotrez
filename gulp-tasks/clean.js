var gulp = require('gulp'),
    del = require('del');

// Declare dist path
var path = {
  dist: './dist/',
  docs: './docs'
};

// Gulp Task for Cleaning Dist Folder
gulp.task('clean', function() {
  return del([path.dist, path.docs]);
});