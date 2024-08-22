import browserSync from 'browser-sync';

const server = browserSync.create();

const serve = (done) => {
  server.init({
    server: {
      baseDir: './build',
    },
    open: false,
  });
  done();
};

export default serve;
