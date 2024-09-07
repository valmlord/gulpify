import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from './paths.js';
import parameters from './parameters.js';

global.$ = {
  gulp: gulp,
  server: browserSync.create(),
  paths: paths,
  parameters: parameters,
};
