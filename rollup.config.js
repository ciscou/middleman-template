import { babel } from '@rollup/plugin-babel';

export default {
  input: 'source/javascripts/site.js',
  output: {
    dir: 'tmp/javascripts',
    format: 'iife'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};
