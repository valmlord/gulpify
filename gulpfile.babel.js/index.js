import gulp from 'gulp';
import browserSync from 'browser-sync';
const server = browserSync.create();

import paths from './config/paths.js';
import parameters from './config/parameters.js';

import html from './tasks/html.js';
import css from './tasks/css.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import fonts from './tasks/fonts.js';
import clear from './tasks/clear.js';

const serve = async () => {
  await new Promise((resolve) => {
    server.init(
      {
        server: {
          baseDir: paths.root,
        },
        open: false,
      },
      resolve,
    );
  });
};

const watcher = () => {
  gulp.watch(paths.html.watch).on('all', gulp.series(html, server.reload));
  gulp.watch(paths.css.watch).on('all', gulp.series(css, server.reload));
  gulp.watch(paths.js.watch).on('all', gulp.series(js, server.reload));
  gulp.watch(paths.images.watch).on('all', gulp.series(img, server.reload));
  gulp.watch(paths.fonts.watch).on('all', gulp.series(fonts, server.reload));
  gulp.watch(paths.data.watch).on('all', gulp.series(html, server.reload));
};

const build = gulp.series(clear, gulp.parallel(html, css, js, img, fonts));
const dev = gulp.series(build, gulp.parallel(watcher, serve));

export { html, css, js, img, fonts, serve, clear, watcher };

export default parameters.isProd ? build : dev;
