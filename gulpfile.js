'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var minifycss = require('gulp-minify-css');
var del = require('del');
var jshint = require('gulp-jshint');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var includes = require('./dist/src/includes.json');
var browserSync = require('browser-sync').create();
var babelify = require("babelify");


var buildProduction = utilities.env.production;

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('styles', function() {
    var tmp = gulp.src('src/styles/app.scss')
        .pipe(sass().on('error', sass.logError));
    return tmp.pipe(concat('rpgui.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'styles task complete' }));
});

gulp.task('scripts', function() {
    var tmp = gulp.src(includes);
    return tmp.pipe(concat('rpgui.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'scripts task complete' }));
});


gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    var tmp = gulp.src(includes);
    return tmp.pipe(concat('rpgui.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
  .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest('dist/images'))
  .pipe(notify({ message: 'images task complete' }));
});

gulp.task('clean', function() {
    return del(['dist/css', 'dist/js', 'dist/images']);
});

// default task
gulp.task('default', ['watch'], function() {
    gulp.start('styles', 'scripts', 'images');
});

// watch
gulp.task('watch', ['clean', 'styles', 'scripts', 'images'], function() {
    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*', ['images']);

    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']);
});

// dist
gulp.task('dist', ['clean', 'styles', 'scripts', 'images'], function() {
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext("js").files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);

});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});
