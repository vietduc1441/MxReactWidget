var gulp = require("gulp");
var clean = require("gulp-clean");
var ts = require('gulp-typescript');
var zip = require('gulp-zip');
var webpack = require("webpack-stream");
var merge2 = require("merge2");
var sequence = require('run-sequence');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('compileTs', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js
        .pipe(gulp.dest('./release/MxReactWidget/widget'));

});

gulp.task("otherFiles", function () {
    return merge2([
        //all main widget file
        gulp.src(["MxReactWidget/widget/template/*.html"])
            .pipe(gulp.dest("release/MxReactWidget/widget/template/")),
        gulp.src(["MxReactWidget/widget/ui/*.*"])
            .pipe(gulp.dest("release/MxReactWidget/widget/ui/")),
        //all config file
        gulp.src(["./*.xml"])
            .pipe(gulp.dest("release/")),
        gulp.src(["MxReactWidget/*.xml"])
            .pipe(gulp.dest("release/MxReactWidget/")),
        gulp.src(["MxReactWidget/widget/lib/**/*.js"])
            .pipe(gulp.dest("release/MxReactWidget/widget/lib/")),
        gulp.src(["MxReactWidget/widget/lib/**/*.css"])
            .pipe(gulp.dest("release/MxReactWidget/widget/lib/"))
    ])
});

gulp.task("clean", function () {
    return gulp.src("./release/")
        .pipe(clean({ force: true }));
});
gulp.task("zip", function () {
    return gulp.src("./bundle/**/*")
        .pipe(zip("MxReactWidget.mpk"))
        .pipe(gulp.dest("./test/widgets/"))
})
gulp.task('webpack', () =>
    gulp.src("./release/MxReactWidget/widget/MxReactWidget.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./bundle"))
)
gulp.task("taskList", sequence(["compileTs", "otherFiles"], "webpack", "zip"));
gulp.task("watch", function () {
    gulp.watch("./MxReactWidget/**/*", ["taskList"]);
});
gulp.task("default", ["clean", "watch"]);
