import { src, dest } from 'gulp';

import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport';

const sassCompiler = gulpSass(sass);

import paths from '../config/paths.js';

import parameters from '../config/parameters.js';

const buildCSS = () =>
  src(paths.css.dev)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'SCSS',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(sourcemaps.init())
    .pipe(size({ title: 'CSS before compilation:' }))
    .pipe(sassCompiler({ quietDeps: true }).on('error', sassCompiler.logError))
    .pipe(autoprefixer(parameters.autoprefixer))
    .pipe(size({ title: 'CSS after autoprefixer:' }))
    .pipe(cleanCSS())
    .pipe(size({ title: 'CSS after minification:' }))
    .pipe(sourcemaps.write('.'))
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(dest(paths.css.build));

export default buildCSS;
