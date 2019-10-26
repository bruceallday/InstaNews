const gulp = require('gulp');

const terser = require("gulp-terser"),
rename = require("gulp-rename"),
sass = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer"),
cssnano = require("gulp-cssnano"),

sourcemaps = require("gulp-sourcemaps"),
eslint = require("gulp-eslint"),
browserSync = require("browser-sync")

gulp.task("sass", function(){
    return gulp
    .src("./sass/style.scss", {sourcemaps:true})
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
        autoprefixer(),
    )
    .pipe(gulp.dest("./build/css"))
    .pipe(cssnano())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("../maps"))
    .pipe(gulp.dest("./build/css/"))    
})

gulp.task("scripts", function(){
    return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({extname: ".min.js"}))
    .pipe(gulp.dest("./build/js"))
})

gulp.task("browser-sync", function(done){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp
        .watch(['build/css/*.css', 'build/js/*.js'])
        .on("change", browserSync.reload)
        done()
})      

gulp.task("watch", function(done){
    gulp.watch("js/*.js", gulp.series("scripts"))
    gulp.watch("sass/*.scss", gulp.series("sass"))
    done()
})

gulp.task("default", gulp.parallel("browser-sync", "watch"))