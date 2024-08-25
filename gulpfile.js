import { series, parallel, watch } from 'gulp';
import browserSync from 'browser-sync';
import paths from './config/paths.js';

const server = browserSync.create();

import buildHTML from './tasks/buildHTML.js';
import buildCSS from './tasks/buildCSS.js';
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
  watch(paths.pug.watch, buildHTML);
  watch(paths.css.watch, buildCSS);
  watch(paths.html.build).on('all', server.reload);
  watch(paths.css.build).on('all', server.reload);
  watch(paths.data.watch).on('all', series(buildHTML, server.reload));
};

export { buildHTML, buildCSS, serve, clear, watcher };

export default series(clear, parallel(buildHTML, buildCSS), serve, watcher);
