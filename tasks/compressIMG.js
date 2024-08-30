import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGiflossy from 'imagemin-giflossy';
import newer from 'gulp-newer';
import webp from 'gulp-webp';

import paths from '../config/paths.js';
import parameters from '../config/parameters.js';

const compressIMG = () =>
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
    .pipe(
      imagemin([
        imageminGiflossy({
          optimizationLevel: 3,
          optimize: 3,
          lossy: 2,
        }),
        imageminPngquant({
          speed: 5,
          quality: [0.6, 0.8],
        }),
        imageminZopfli({
          more: true,
        }),
        imageminMozjpeg({
          progressive: true,
          quality: 90,
        }),
      ]),
    )
    .pipe(dest(paths.images.build));

export default compressIMG;
