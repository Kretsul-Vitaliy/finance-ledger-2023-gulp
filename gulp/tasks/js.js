import webpack from 'webpack-stream';
import rename from 'gulp-rename';

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpack({
          mode: 'production',
          output: {
            filename: 'app.min.js',
          },
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isDev,
        rename({
          extname: '.min.js',
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
