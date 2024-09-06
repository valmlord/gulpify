const serve = async () => {
  await new Promise((resolve) => {
    global.$.server.init(
      {
        server: {
          baseDir: global.$.paths.root,
        },
        open: false,
      },
      resolve,
    );
  });
};

export default serve;
