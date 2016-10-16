var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', ['server', 'client'], function() {

});

var subFolders = function (base) {
    var result = [];
    var files = fs.readdirSync(base);
    for(var i = 0; i < files.length; i ++){
        var fileStat = fs.statSync(path.join(base, files[i]));
        result.push(path.join(base, files[i],  fileStat.isDirectory() ? "/**" : ""));
    }
    return result;
};

gulp.task('server', ['hbs'], function () {
    var jsDir = 'src/server/js';
    return gulp.src(subFolders(jsDir), {base: jsDir})
        .pipe(uglify())
        .pipe(gulp.dest('./dest'));
});

gulp.task('hbs', function () {
    var hbsDir = 'src/server/hbs';
    return gulp.src(subFolders(hbsDir), {base: hbsDir})
        .pipe(gulp.dest('dest'));
});

gulp.task('client', function () {
    var clientDir = 'src/client';
    return gulp.src(subFolders(clientDir), {base: clientDir})
        .pipe(gulp.dest('dest/public'));
});