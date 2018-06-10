var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
        'node_modules/font-awesome/scss/font-awesome.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest("src/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task('default', ['fonts', 'js', 'serve']);