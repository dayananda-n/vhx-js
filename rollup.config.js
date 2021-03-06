import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import conditional from 'rollup-plugin-conditional';
import replace from 'rollup-plugin-replace';
import filesize from 'rollup-plugin-filesize';
import { plugin as analyze } from 'rollup-plugin-analyzer'

const isProduction = process.env.NODE_ENV === 'production';
const nodeBuild = process.env.NODE_BUILD;

export default {
  entry: './lib/vhx.js',
  format: 'umd',
  dest: JSON.parse(nodeBuild) ? './dist/index.js' : './dist/client.js',
  moduleName: 'VhxApi',
  sourceMap: true,
  plugins: [
    analyze(),
    replace({
      'process.env.NODE_BUILD': JSON.parse(nodeBuild),
    }),
    conditional(!JSON.parse(nodeBuild), [
      nodeResolve({
        browser: true,
        jsnext: true,
        main: true,
        module: true
      }),
    ]),
    commonjs(),
    buble(),
    conditional(isProduction, [
      uglify({
        sourceMap: true
      })
    ]),
    filesize(),
  ]
};
