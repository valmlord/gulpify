const pathDev = './app';
const pathBuild = './build';

const paths = {
  root: pathBuild,
  pug: {
    dev: `${pathDev}/pug/*.pug`,
    watch: `${pathDev}/pug/**/*.pug`,
  },
  html: {
    build: pathBuild,
  },
  css: {
    dev: `${pathDev}/scss/**/*.scss`,
    watch: `${pathDev}/scss/**/*.scss`,
    build: `${pathBuild}/css`,
  },
  data: {
    watch: './data/**/*.json',
  },
};

export default paths;
