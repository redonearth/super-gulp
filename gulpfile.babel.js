import gulp from "gulp";
import del from "del";
import gulpPug from "gulp-pug";

const routes = {
  pug: {
    src: "src/*.pug",
    dest: "build"
  }
};

const clean = () => del(["build"]);

const pug = () =>
  gulp.src(routes.pug.src).pipe(gulpPug()).pipe(gulp.dest(routes.pug.dest));

const prepare = gulp.dest([clean]);

const assets = gulp.series([pug]);

export const dev = gulp.series([prepare, assets]);
