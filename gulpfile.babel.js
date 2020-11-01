import gulp from "gulp";
import del from "del";
import gulpPug from "gulp-pug";
import ws from "gulp-webserver";

const routes = {
  pug: {
    watch: "src/**/*.pug",
    src: "src/*.pug",
    dest: "build"
  }
};

const clean = () => del(["build"]);

const webserver = () =>
  gulp.src("build").pipe(ws({ livereload: true, open: true }));

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
};

const pug = () =>
  gulp.src(routes.pug.src).pipe(gulpPug()).pipe(gulp.dest(routes.pug.dest));

const prepare = gulp.series([clean]);

const assets = gulp.series([pug]);

const postDev = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, postDev]);
