import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import pug from 'gulp-pug';
import webpHTML from 'gulp-webp-html';
import size from 'gulp-size';
import htmlMin from 'gulp-htmlmin';

import loadData from './loadData.js';

const html = () => {
  const data = loadData('./data');

  return gulp
    .src(global.$.paths.html.dev)
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
        locals: data,
        pretty: true,
      }),
    )
    .pipe(webpHTML())
    .pipe(size({ title: 'HTML before compression:' }))
    .pipe(htmlMin(global.$.parameters.htmlmin))
    .pipe(size({ title: 'HTML after compression:' }))
    .pipe(gulp.dest(global.$.paths.html.build));
};

export default html;
