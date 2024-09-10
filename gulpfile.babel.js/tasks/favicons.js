import { src, dest } from 'gulp';
import favicons from 'gulp-favicons';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

const faviconsTask = () =>
  src(global.$.paths.favicons.dev)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Favicons',
          message: '<%= error.message %>',
        })),
      }),
    )
    .pipe(
      favicons({
        appName: 'Gulpify',
        appDescription: 'Gulpify favicon',
        developerName: 'Developer',
        developerURL: 'https://www.korshukovstepan.dev/',
        background: '#020307',
        path: 'favicons/',
        url: 'https://www.korshukovstepan.dev/',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: 'https://www.korshukovstepan.dev/',
        version: 1.0,
        logging: false,
        html: 'index.html',
        pipeHTML: true,
        replace: true,
      }),
    )
    .pipe(dest(global.$.paths.favicons.build));

export default faviconsTask;
