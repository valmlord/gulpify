import { src, dest, series, watch } from 'gulp';
import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import size from 'gulp-size';

const buildHTML = () =>
  src('app/html/*.html')
    .pipe(fileInclude())
    .pipe(size({ title: 'HTML before compression:' }))
    .pipe(
      htmlMin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(size({ title: 'HTML after compression:' }))
    .pipe(dest('./build'));

const watcher = () => {
  watch('app/html/**/*.html', buildHTML);
};

export { buildHTML, watcher };

export default series(buildHTML, watcher);
