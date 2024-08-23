const pathDev = './app';
const pathBuild = './build';

const paths = {
  root: pathBuild,
  pug: {
    dev: `${pathDev}/pug/*.pug`,
    watch: `${pathDev}/pug/**/*.pug`,
  },
  scss: {
    dev: `${pathDev}/scss/**/*.scss`,
    build: `${pathBuild}/css`,
  },
  html: {
    build: pathBuild,
  },
  css: {
    build: `${pathBuild}/css/*.css`,
  },
  data: {
    watch: './data/**/*.json',
  },
};

export default paths;
