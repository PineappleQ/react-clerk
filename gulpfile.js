var gulp = require('gulp');
var less = require('gulp-less');

gulp.task("less", function () {
    return gulp.src("./src/**/*.less")
        .pipe(less())
        .pipe(gulp.dest("./src"));
});

gulp.task("lessWatch", function () {
    gulp.watch("./src/**/*.less", ["less"]);
});