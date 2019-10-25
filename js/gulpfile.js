const gulp = require('gulp');
const terser = require("gulp-terser"),
rename = require("gulp-rename")

gulp.task("default", function(){
    return gulp
    .src("./*.js")
})

// gulp.task("default", function(done){
//     console.log("Hello it is I gulp")
//     done();
// })