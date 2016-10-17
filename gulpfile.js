
var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    install = require("gulp-install");

gulp.task('default', ['server', 'client', 'docker'], function() {

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

gulp.task('server', [ 'server-dep', 'hbs', 'data'], function () {
    var jsDir = 'src/server/js';
    return gulp.src(subFolders(jsDir), {base: jsDir})
        /*.pipe(uglify())*/
        .pipe(gulp.dest('./dest'));
});

gulp.task('server-dep', function () {
    var pkgJson = 'src/server/package.json';
    return gulp.src(pkgJson)
        .pipe(gulp.dest('dest'))
        .pipe(install());
});

gulp.task('hbs', function () {
    var hbsDir = 'src/server/hbs';
    return gulp.src(subFolders(hbsDir), {base: hbsDir})
        .pipe(gulp.dest('dest'));
});

gulp.task('data', function () {
    var dataDir = 'src/data';
    return gulp.src(subFolders(dataDir), {base: dataDir})
        .pipe(gulp.dest('dest/data'));
});

gulp.task('client', function () {
    var clientDir = 'src/client';
    return gulp.src(subFolders(clientDir), {base: clientDir})
        .pipe(gulp.dest('dest/public'));
});

gulp.task('docker', function () {
    var dockerDir = 'src/docker';
    return gulp.src(subFolders(dockerDir), {base: dockerDir})
        .pipe(gulp.dest('dest'));
    // .pipe(docker(
    //     {
    //         name: "",
    //         build: "",
    //         dockerfile: "",
    //         env: "",
    //         git: "",
    //         ports: [],
    //         repo: '',
    //         run: '',
    //         tags: '',
    //         volumes: ''
    //     }));
});