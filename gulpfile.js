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
        gulp.src(["MxReactWidget/widget/ui/*.*"])
            .pipe(gulp.dest("./bundle/com/mendix/widget/custom/MxReactWidget/ui/")),
        gulp.src(["./*.xml"])
            .pipe(gulp.dest("bundle/")),
        gulp.src(["MxReactWidget/*.xml"])
            .pipe(gulp.dest("bundle/MxReactWidget/")),
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
