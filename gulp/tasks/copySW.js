export const copySW = () => {
  return app.gulp.src(app.path.src.sw).pipe(app.gulp.dest(app.path.build.js));
};
