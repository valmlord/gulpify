import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

const buildFonts = () =>
  src(paths.fonts.dev)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Fonts',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(newer(paths.fonts.build))
    .pipe(fonter(parameters.fonter.formats))
    .pipe(dest(paths.fonts.build))
    .pipe(ttf2woff2())
    .pipe(dest(paths.fonts.build));

export default buildFonts;
