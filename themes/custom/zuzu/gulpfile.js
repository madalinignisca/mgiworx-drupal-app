// Include gulp.
var gulp = require('gulp');
var config = require('./config.json');

// Include Browser sync
var browserSync = require('browser-sync').create();

// Include plugins.
var shell = require('gulp-shell');
var sass = require('gulp-sass');

// Run drush to clear the theme registry.
gulp.task('drush', shell.task(['drush cr']));
gulp.task('drush-watch', ['drush'], browserSync.reload);

// Run sass
gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.stream());
});
gulp.task('sass-watch', ['sass'], browserSync.reload);

// Browsersync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: config.browserSyncProxy
    });
});

// Development task (watch, serve, etc.)
gulp.task('serve', [ 'browser-sync', 'drush', 'sass'], function() {
  gulp.watch(config.drush.src, ['drush-watch']);
  gulp.watch(config.sass.src, ['sass-watch']);
});

// Default Task
gulp.task('default', ['serve']);
