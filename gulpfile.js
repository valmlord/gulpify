import { src, dest, series, watch, parallel } from 'gulp';
import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import size from 'gulp-size';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { deleteAsync } from 'del';

const server = browserSync.create();

const buildHTML = () =>
  src('app/html/*.html')
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'HTML',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(fileInclude())
    .pipe(size({ title: 'HTML before compression:' }))
    .pipe(
      htmlMin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(size({ title: 'HTML after compression:' }))
    .pipe(dest('./build'))
    .pipe(server.stream());

const serve = () => {
  server.init({
    server: {
      baseDir: './build',
    },
    open: false,
  });
};

const clear = () => deleteAsync('./build');

const watcher = () => {
  watch('app/html/**/*.html', buildHTML);
  watch('build/*.html').on('change', server.reload);
};

export { buildHTML, watcher, serve, clear };

export default series(clear, buildHTML, parallel(serve, watcher));
