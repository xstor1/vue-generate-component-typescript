var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');

gulp.task('dev', function () {
    return gulp.src(['./lib/**/*.js', '!./lib/blueprints/**/*.js'])
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function (done) {
    gulp.src('./lib/blueprints/**/**', {
        base: "./lib"
    })
        .pipe(gulp.dest('./dist'));

    gulp.src('./lib/config/config.json')
        .pipe(gulp.dest('./dist/config'));
    done();
});

gulp.task('clean', function () {
    return del([
        'dist/**'
    ]);
});


gulp.task('build', gulp.series(
    'clean',
    'dev',
    'copy',
    function (done) {
        done();
    })
);
