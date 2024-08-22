import { series, parallel } from 'gulp';
import buildHTML from './tasks/buildHTML.js';
import buildSCSS from './tasks/buildSCSS.js';
import serve from './tasks/serve.js';
import clear from './tasks/clear.js';
import watcher from './tasks/watcher.js';

export { buildHTML, buildSCSS, serve, clear, watcher };

export default series(clear, parallel(buildHTML, buildSCSS), serve, watcher);
