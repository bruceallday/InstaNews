const gulp = require('gulp');

const terser = require("gulp-terser"),
rename = require("gulp-rename"),
sass = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer"),
cssnano = require("gulp-cssnano")

gulp.task("sass", function(){
    return gulp
    .src("./sass/style.scss")
    .pipe(sass())

    .pipe(gulp.dest("./build/css"))
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./build/css"))

    
})

gulp.task("default", function(){
    return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({extname: ".min.js"}))
    .pipe(gulp.dest("./build/js"))

})

// gulp.task("default", function(done){
//     console.log("Hello it is I gulp")
//     done();
// })