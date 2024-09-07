import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSprite from 'gulp-svg-sprite';

import paths from '../config/paths.js';

const svgSpriteConfig = {
  mode: {
    symbol: {
      sprite: '../sprite.svg', // Имя файла спрайта
      example: true, // Создание HTML примера
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            // Max optomization for SVG
            { name: 'removeTitle', active: true },
            { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },

            // Gentle optomization for SVG (if you need to keep some attributes for some reason)
            // { name: 'removeTitle', active: false },
            // { name: 'removeAttrs', params: { attrs: '(stroke)' }},
            // { name: 'cleanupIDs', active: false },
            // { name: 'removeViewBox', active: false },
            // { name: 'removeDimensions', active: true },
          ],
        },
      },
    ],
  },
};

const svgSpriteTask = () =>
  src(paths.icons.dev)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'SVG Sprite',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(dest(paths.icons.build));

export default svgSpriteTask;
