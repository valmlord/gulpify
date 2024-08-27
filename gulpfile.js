import { series, parallel, watch } from 'gulp';
import browserSync from 'browser-sync';
const server = browserSync.create();

import paths from './config/paths.js';

import buildHTML from './tasks/buildHTML.js';
import buildCSS from './tasks/buildCSS.js';
import buildJS from './tasks/buildJS.js';
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
  watch(paths.html.watch).on('all', series(buildHTML, server.reload));
  watch(paths.css.watch).on('all', series(buildCSS, server.reload));
  watch(paths.js.watch).on('all', series(buildJS, server.reload));
  watch(paths.data.watch).on('all', series(buildHTML, server.reload));
};

export { buildHTML, buildCSS, buildJS, serve, clear, watcher };

export default series(
  clear,
  parallel(buildHTML, buildCSS, buildJS),
  serve,
  watcher,
);
