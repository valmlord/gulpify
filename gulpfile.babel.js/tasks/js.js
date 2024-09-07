import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

const js = () =>
  src(paths.js.dev, { sourcemaps: parameters.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'JavaScript',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(babel())
    .pipe(webpack(parameters.webpack))
    .pipe(dest(paths.js.build, { sourcemaps: parameters.isDev }));

export default js;
