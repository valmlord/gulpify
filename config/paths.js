const pathDev = './app';
const pathBuild = './build';

const paths = {
  root: pathBuild,
  html: {
    dev: `${pathDev}/pug/*.pug`,
    watch: `${pathDev}/pug/**/*.pug`,
    build: `${pathBuild}`,
  },
  css: {
    dev: `${pathDev}/scss/*.{scss,sass}`,
    watch: `${pathDev}/scss/**/*.{scss,sass}`,
    build: `${pathBuild}/css`,
  },
  data: {
    watch: './data/**/*.json',
  },
};

export default paths;
