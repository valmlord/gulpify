const isProd = process.argv.includes('--production');
const isDev = !isProd;

const parameters = {
  isProd: isProd,

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
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
};

export default parameters;
