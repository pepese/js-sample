var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var isparta = require('isparta');
var mocha = require('gulp-mocha');
var debug = require('gulp-debug');

gulp.task('pre-test', function () {
  //return gulp.src(['app/**/*.js'])
  return gulp.src(['app/app.js','app/controllers/*.js'])
    //.pipe(debug())  // デバッグしたいとき
    // Covering files
    .pipe(istanbul({
      // supports es6
      instrumenter: isparta.Instrumenter
    }))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['app/spec/**/*.js'])
    //.pipe(debug())
    .pipe(mocha())
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports('app/coverage'))
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});
