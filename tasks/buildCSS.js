import { src, dest } from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import shorthand from 'gulp-shorthand';
import groupCSSMediaQueries from 'gulp-group-css-media-queries';

const sassCompiler = gulpSass(sass);

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

const buildCSS = () =>
  src(paths.css.dev, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'CSS',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(sassCompiler({ quietDeps: true }).on('error', sassCompiler.logError))
    .pipe(autoprefixer(parameters.autoprefixer))
    .pipe(shorthand())
    .pipe(groupCSSMediaQueries())
    .pipe(dest(paths.css.build, { sourcemaps: true }))
    .pipe(size({ title: 'CSS before minification:' }))
    .pipe(csso())
    .pipe(size({ title: 'CSS after minification:' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.css.build, { sourcemaps: true }));

export default buildCSS;
