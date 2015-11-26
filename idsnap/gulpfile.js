var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task("sass", function(){
  return gulp.src("./sass/**/*.scss")
  .pipe(sass())
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(rename("main.min.css"))
  .pipe(gulp.dest("./css"));
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
})

gulp.task("default", ['sass', 'watch']);