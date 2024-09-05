import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpif from 'gulp-if';

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

const img = () =>
  src(paths.images.dev, { encoding: false })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Images',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(newer(paths.images.build))
    .pipe(webp())
    .pipe(dest(paths.images.build))
    .pipe(src(paths.images.dev, { encoding: false }))
    .pipe(gulpif(parameters.isProd, imagemin(parameters.imagemin)))
    .pipe(dest(paths.images.build));

export default img;
