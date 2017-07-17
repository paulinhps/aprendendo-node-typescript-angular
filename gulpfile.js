const gulp = require('gulp');
const ts = require('gulp-typescript');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

const tsProject = ts.createProject('tsconfig.json');

gulp.task("default", () => {

    return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
})
