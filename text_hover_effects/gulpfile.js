var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');

gulp.task("sass", function(){ 
    gulp.src("./sass/*.scss")
    .pipe(sass({ style: 'expanded' }))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./css/'));
});


gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
})

gulp.task("default", ['sass', 'watch']);