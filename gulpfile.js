var gulp = require('gulp'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    core = require('babel-core'),
    autoprefixer = require('gulp-autoprefixer')


    gulp.task('scss', function () {
        return gulp.src('src/scss/pages/*.scss')
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('public/css'));
    });
    
   
 
    
    gulp.task('build:scss', function() {
        return gulp.src('src/**/*.scss')
        .pipe (sass())
        .pipe (gulp.dest('public/css'))
    
    });

    gulp.task('build:js', function() {
        return gulp.src('src/**/*.js')
        .pipe (babel())
        .pipe (gulp.dest('public/js'))
    
    });

    gulp.task('watch:scss', function () {
        gulp.watch('src/**/*.scss', ['build:scss']);
    });
    
    
    gulp.task('watch:js', function () {
        gulp.watch('src/**/*.js', ['build:js']);
    });

    gulp.task('build', [
        'build:js',
        'build:scss'
    ]);
    gulp.task('watch', [
        'watch:js',
        'watch:scss'
    ]);
