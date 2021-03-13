import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

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
    eslint(),
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
};
