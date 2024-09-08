import './config/global.js';

import html from './tasks/html.js';
import css from './tasks/css.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import fonts from './tasks/fonts.js';
import clear from './tasks/clear.js';
import serve from './tasks/server.js';
import svgSpriteTask from './tasks/svgSprite.js';
import faviconsTask from './tasks/favicons.js';

const watcher = () => {
  global.$.gulp
    .watch(global.$.paths.html.watch)
    .on('all', global.$.gulp.series(html, global.$.server.reload));
  global.$.gulp
    .watch(global.$.paths.css.watch)
    .on('all', global.$.gulp.series(css, global.$.server.reload));
  global.$.gulp
    .watch(global.$.paths.js.watch)
    .on('all', global.$.gulp.series(js, global.$.server.reload));
  global.$.gulp
    .watch(global.$.paths.images.watch)
    .on('all', global.$.gulp.series(img, global.$.server.reload));
  global.$.gulp
    .watch(global.$.paths.fonts.watch)
    .on('all', global.$.gulp.series(fonts, global.$.server.reload));
  global.$.gulp
    .watch(global.$.paths.data.watch)
    .on('all', global.$.gulp.series(html, global.$.server.reload));
  global.$.gulp.task('svgSprite', svgSpriteTask);
};

const build = global.$.gulp.series(
  clear,
  global.$.gulp.parallel(
    html,
    css,
    js,
    img,
    fonts,
    svgSpriteTask,
    faviconsTask,
  ),
);
const dev = global.$.gulp.series(build, global.$.gulp.parallel(watcher, serve));

export {
  html,
  css,
  js,
  img,
  fonts,
  serve,
  clear,
  watcher,
  svgSpriteTask,
  faviconsTask,
};

export default global.$.parameters.isProd ? build : dev;
