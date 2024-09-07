import imageminGiflossy from 'imagemin-giflossy';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

const parameters = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
    removeComments: isProd,
  },

  pug: {
    pretty: isDev,
  },

  autoprefixer: {
    overrideBrowserslist: ['last 3 versions'],
    cascade: false,
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
    output: {
      filename: 'main.min.js',
    },
  },

  imagemin: [
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
  ],
  fonter: {
    subset: [66, 67, 68, 69, 70, 71],
    formats: ['ttf', 'otf', 'eot', 'woff', 'svg'],
  },
};

export default parameters;
