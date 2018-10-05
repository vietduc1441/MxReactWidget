var gulp = require("gulp");
var clean = require("gulp-clean");
var ts = require('gulp-typescript');
var zip = require('gulp-zip');
var webpack = require("webpack-stream");
var merge2 = require("merge2");
var sequence = require('run-sequence');
const debug = require('gulp-debug');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('compileTs', function () {
    var tsResult = tsProject.src()
        .pipe(debug({ title: "compile ts" }))
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
    return merge2([
        gulp.src("./release/")
            .pipe(debug({ title: "Clean release/" }))
            .pipe(clean({ force: true })),
        gulp.src("./bundle/")
            .pipe(debug({ title: "Clean bundle/" }))
            .pipe(clean({ force: true })),
    ]);
});
gulp.task("zip", function () {
    return gulp.src("./bundle/**/*")
        .pipe(zip("MxReactWidget.mpk"))
        .pipe(gulp.dest("./test/widgets/"))
})
gulp.task("copyToServer", () => {
    return gulp.src(["./bundle/**/*.*"])
        .pipe(gulp.dest("test/deployment/web/widgets"))
})
gulp.task('webpack', () =>
    gulp.src("./release/MxReactWidget/widget/MxReactWidget.js")
        .pipe(debug({ title: "webpack" }))
        .pipe(webpack(require("./webpack.config.js")))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
        })
        .pipe(gulp.dest("./bundle"))
)
gulp.task("taskList", () => sequence(["otherFiles", "compileTs"], "webpack", ["zip", "copyToServer"]));
gulp.task("watch", function () {
    gulp.watch("./MxReactWidget/**/*", ["taskList"]);
});
gulp.task("default", () => sequence("clean", "watch"));
