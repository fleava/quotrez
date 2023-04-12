import gulp from 'gulp'
import clean from 'gulp-clean'

var paths = [
  './dist/',
  './docs'
]

gulp.task('clean', function () {
  for (path of paths) {
    return gulp.src(path, { read: false })
      .pipe(clean())
  }
})
