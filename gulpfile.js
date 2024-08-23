import { series, parallel, watch } from 'gulp';
import browserSync from 'browser-sync';
import paths from './config/paths.js';

const server = browserSync.create();

import buildHTML from './tasks/buildHTML.js';
import buildSCSS from './tasks/buildSCSS.js';
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
  watch(paths.scss.dev, buildSCSS);
  watch(paths.html.build).on('change', server.reload);
  watch(paths.css.build).on('change', server.reload);
  watch(paths.scss.dev).on('change', server.reload);
  watch(paths.data.watch).on('change', series(buildHTML, server.reload));
};

export { buildHTML, buildSCSS, serve, clear, watcher };

export default series(clear, parallel(buildHTML, buildSCSS), serve, watcher);
