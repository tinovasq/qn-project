import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import fs from 'fs'
import inject from 'rollup-plugin-inject'
import path from 'path'

const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'))
const external = Object.keys(pkg.dependencies || {})

const BabelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
  exclude: 'node_modules/**',
}

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js',
    sourcemap: 'inline',
  },
  external,
  plugins: [
    babel(BabelConfig),
    commonjs(),
    inject({
      Promise: 'bluebird',
    }),
  ],
}
