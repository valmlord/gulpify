import { src, dest, series, watch, parallel } from 'gulp';
import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import size from 'gulp-size';
import browserSync from 'browser-sync';

const server = browserSync.create();

const buildHTML = () =>
  src('app/html/*.html')
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
  });
};

const watcher = () => {
  watch('app/html/**/*.html', buildHTML);
  watch('build/*.html').on('change', server.reload);
};

export { buildHTML, watcher, serve };

export default series(buildHTML, parallel(serve, watcher));
