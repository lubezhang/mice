var gulp = require("gulp"),
    watch = require("gulp-watch"),
    // babel = require("gulp-babel"),
    webpack = require("gulp-webpack"),
    webpackConfig = require("./webpack.config.js");


gulp.task("webpack", function(){
    gulp.src("")
        .pipe(webpack(webpackConfig()))
        .pipe(gulp.dest(""));
});

gulp.task("webpack-watch", function(){
    var ops = {
        env: "dev"
    }
    gulp.src("")
        .pipe(webpack(webpackConfig(ops)))
        .pipe(gulp.dest(""));
});

gulp.task("babel", function(){
    return gulp.src("./src/**/*.js")
        .pipe(babel({
            "presets": ["es2015", "stage-0"]
        }))
        .pipe(gulp.dest("app"));
})

gulp.task("watch", function(){
    watch("./react/**/*.jsx", function(){
        gulp.run("webpack")
    });
})

gulp.task("default", function(){
    gulp.run("webpack")
});