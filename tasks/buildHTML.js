import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import htmlMin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

import loadData from './loadData.js';

const buildHTML = () => {
  const data = loadData('./data');

  return src(paths.pug.dev)
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
    .pipe(size({ title: 'HTML before compression:' }))
    .pipe(htmlMin(parameters.htmlmin))
    .pipe(size({ title: 'HTML after compression:' }))
    .pipe(dest(paths.html.build));
};

export default buildHTML;
