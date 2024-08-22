import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import htmlMin from 'gulp-htmlmin';
import size from 'gulp-size';
import browserSync from 'browser-sync';
import advantagesDate from '../data/advantages.json' assert { type: 'json' };

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

export default buildHTML;
