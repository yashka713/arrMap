/**
 * Created by Ярик on 09.05.2016.
 */
var gulp = require('gulp');
var lec = require('gulp-line-ending-corrector');
LineEndingCorrector = require('line-ending-corrector').LineEndingCorrector;

gulp.task('minify', function () {

    gulp.src('libs\bootstrap\grunt\change-version.js')
        .pipe(lec());
});

// Действия по умолчанию
gulp.task('default', function () {
    gulp.run('minify');

});