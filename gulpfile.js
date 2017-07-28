var gulp = require("gulp");
var clean = require("gulp-clean");
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('compileTs', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js
        .pipe(gulp.dest('./release/MxReactWidget/widget'));

});

gulp.task("otherFiles", function () {
    //all main widget file
    gulp.src(["MxReactWidget/widget/template/*.html"])
        .pipe(gulp.dest("release/MxReactWidget/widget/template/"));
    gulp.src(["MxReactWidget/widget/ui/*.*"])
        .pipe(gulp.dest("release/MxReactWidget/widget/ui/"));
    //all config file
    gulp.src(["./*.xml"])
        .pipe(gulp.dest("release/"));
    gulp.src(["MxReactWidget/*.xml"])
        .pipe(gulp.dest("release/MxReactWidget/"));
    gulp.src(["MxReactWidget/widget/lib/**/*.js"])
        .pipe(gulp.dest("release/MxReactWidget/widget/lib/"));
    gulp.src(["MxReactWidget/widget/lib/**/*.css"])
        .pipe(gulp.dest("release/MxReactWidget/widget/lib/"));
});

gulp.task("clean", function () {
    gulp.src("./release/")
        .pipe(clean({ force: true }));
});

gulp.task("taskList", ["compileTs", "otherFiles"]);
gulp.task("watch", function () {
    gulp.watch("./MxReactWidget/**/*", ["taskList"]);
});
gulp.task("default", ["clean", "watch"]);
