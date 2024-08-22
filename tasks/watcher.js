import { watch } from 'gulp';
import buildHTML from './buildHTML.js';
import buildSCSS from './buildSCSS.js';
import browserSync from 'browser-sync';

const server = browserSync.create();

const watcher = () => {
  watch('app/pug/**/*.pug', buildHTML);
  watch('app/scss/**/*.scss', buildSCSS);
  watch('build/*.html').on('change', server.reload);
};

export default watcher;
