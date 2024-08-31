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
  fonter: {
    subset: [66, 67, 68, 69, 70, 71],
    formats: ['woff', 'woff2', 'otf', 'eot', 'otc', 'ttc', 'svg'],
  },
};

export default parameters;
