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
  fonts: {
    dev: `${pathDev}/assets/fonts/**/*.{woff,woff2,otf,ttf,eot,otc,ttc,svg}`,
    watch: `${pathDev}/assets/fonts/**/*.{woff,woff2,otf,ttf,eot,otc,ttc,svg}`,
    build: `${pathBuild}/assets/fonts`,
  },
  data: {
    watch: './data/**/*.json',
  },
};

export default paths;
