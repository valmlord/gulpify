const pathDev = '../app';
const pathBuild = '../build';

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
  js: {
    dev: `${pathDev}/js/*.js`,
    watch: `${pathDev}/js/**/*.js`,
    build: `${pathBuild}/js`,
  },
  images: {
    dev: `${pathDev}/assets/img/**/*.{jpg,jpeg,png,gif,svg}`,
    watch: `${pathDev}/assets/img/**/*.{jpg,jpeg,png,gif,svg}`,
    build: `${pathBuild}/assets/img`,
  },
  icons: {
    dev: `${pathDev}/assets/icons/**/*.svg`,
    build: `${pathBuild}/assets/icons`,
  },
  fonts: {
    dev: `${pathDev}/assets/fonts/*.ttf`,
    watch: `${pathDev}/assets/fonts/*.ttf`,
    build: `${pathBuild}/assets/fonts`,
  },
  data: {
    watch: `./data/*.json`,
  },
  favicons: {
    dev: `${pathDev}/assets/icons/favicon.png`,
    build: `${pathBuild}/build/assets/favicons/`,
  },
};

export default paths;
