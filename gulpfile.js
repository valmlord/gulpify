import { src, dest, series, watch, parallel } from 'gulp';
import pug from 'gulp-pug';
import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import size from 'gulp-size';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { deleteAsync } from 'del';

import advantagesDate from './data/advantages.json' assert { type: 'json' };

const server = browserSync.create();

const buildHTML = () =>
  src('app/pug/*.pug')
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'PUG',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(
      pug({
        data: {
          advantages: advantagesDate,
        },
      }),
    )
    .pipe(size({ title: 'Pug before compression:' }))
    .pipe(
      htmlMin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(size({ title: 'Pug after compression:' }))
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
  watch('app/pug/**/*.pug', buildHTML);
  watch('build/*.pug').on('change', server.reload);
};

export { buildHTML, watcher, serve, clear };

export default series(clear, buildHTML, parallel(serve, watcher));
