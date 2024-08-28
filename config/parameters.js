const parameters = {
  htmlmin: {
    collapseWhitespace: true,
    removeComments: true,
  },
  autoprefixer: {
    overrideBrowserslist: ['last 3 versions'],
    cascade: false,
  },
  webpack: {
    mode: 'development',
    output: {
      filename: 'main.min.js',
    },
  },
  imagemin: {
    verbose: true,
  },
};

export default parameters;
