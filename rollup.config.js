import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'source/javascripts/site.js',
  output: {
    dir: 'tmp/javascripts',
    format: 'iife'
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
};
