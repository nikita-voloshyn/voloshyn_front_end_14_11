const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('less', function() {
    return gulp.src('src/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('src/less/**/*.less', gulp.series('less'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('sass', 'less', 'scripts', 'watch'));
