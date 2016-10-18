
var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    install = require('gulp-install'),
    Docker = require('gulp-docker');

gulp.task('default', ['server', 'client', 'docker'], function() {

});
/**
 * List all of base directory staff, for copy/move.
 */
var subFolders = function (base) {
    var result = [];
    var files = fs.readdirSync(base);
    for(var i = 0; i < files.length; i ++){
        var fileStat = fs.statSync(path.join(base, files[i]));
        result.push(path.join(base, files[i],  fileStat.isDirectory() ? "/**" : ""));
    }
    return result;
};

gulp.task('server', [ 'dep', 'hbs', 'data'], function () {
    var jsDir = 'src/server/js';
    return gulp.src(subFolders(jsDir), {base: jsDir})
        /*.pipe(uglify())*/
        .pipe(gulp.dest('./dest'));
});
/**
 * Server Dependencies build
 */
gulp.task('dep', function () {
    var pkgJson = 'src/server/package.json';
    return gulp.src(pkgJson)
        .pipe(gulp.dest('dest'))
        .pipe(install());
});
/**
 * Server View Engine build
 */
gulp.task('hbs', function () {
    var hbsDir = 'src/server/hbs';
    return gulp.src(subFolders(hbsDir), {base: hbsDir})
        .pipe(gulp.dest('dest'));
});
/**
 * Server producing Data build
 */
gulp.task('data', function () {
    var dataDir = 'src/data';
    return gulp.src(subFolders(dataDir), {base: dataDir})
        .pipe(gulp.dest('dest/data'));
});

gulp.task('client', ['lib'], function () {

    gulp.src('')
});
/**
 * Client Library build
 */
gulp.task('lib', function () {
    var clientDir = 'src/client';
    var installTask =  gulp.src(clientDir + "/package.json")
        .pipe(install());
    installTask.on('end', function () {
        return gulp.src(subFolders(clientDir + "/node_modules/bootstrap/dist"), {base: clientDir + "/node_modules/bootstrap/dist"})
            .pipe(gulp.dest('dest/public/lib/bootstrap'));
    });
});
/**
 * Docker build
 */
gulp.task('docker', ['server', 'client'], function () {
    var docker = new Docker(gulp,{
        sidekick: {
            build: "bin/build",
            run:   "bin/sidekick",
            env:   { ENV: "production" },
            git:   "git@github.com:winton/sidekick.git#release",
            repo:  "quay.io/winton/sidekick"
        }
    });
    var dockerDir = 'src/docker';
    return gulp.src(subFolders(dockerDir), {base: dockerDir})
        .pipe(gulp.dest('dest'))
        .pipe(docker.build());
});