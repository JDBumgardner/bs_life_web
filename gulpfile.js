var gulp = require('gulp'),
    merge = require('merge-stream'),
    runSequence = require('run-sequence'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    _ = require('underscore'),
    fs = require('fs'),
    ini = require('ini'),
    del = require('del');

// read local configuration file
//var local_ini = './config/config.ini';
//config = ini.parse(fs.readFileSync(local_ini, 'utf-8'));
config = {
    "build": {
        "public_dir": "./public_dist",
        "node_dir": "./node_modules"
    }
}

// copy static files to public_dist
gulp.task('copy_static', function() {
    return gulp.src(["./web/app/static/**/*"])
        .pipe(gulp.dest(config.build.public_dir));
});

// build js modules for front end
gulp.task('browserify', ['copy_static'], function() {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle()
    });
    var src_dir = config.build.public_dir + '/js/';
    return gulp.src([src_dir + '/**/*.js'])
        .pipe(browserified)
        .pipe(gulp.dest(src_dir));
});

// bundle bootstrap resources for browser
gulp.task('bootstrap', function() {
    return gulp.src([config.build.node_dir + '/bootstrap/dist/**/*'])
        .pipe(gulp.dest(config.build.public_dir + '/bootstrap'));
});

// clean ./public_dist
gulp.task('clean', function(cb) {
    del([config.build.public_dir], cb);
});

gulp.task('build', function(cb) {
    runSequence('clean', ['browserify', 'bootstrap'], cb);
});

gulp.task('default', ['build']);
