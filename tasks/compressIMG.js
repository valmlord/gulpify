import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

const compressIMG = () =>
  src(paths.images.dev)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Images',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(newer(paths.images.build))
    .pipe(imagemin(parameters.imagemin))
    .pipe(dest(paths.images.build));

export default compressIMG;
