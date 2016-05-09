/*
 * @author David Menger
 */
'use strict';

require('webpack');

const webpackConfig = require('./webpack.config');

module.exports = function karmaConfig (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'webpack.tests.js'
        ],
        preprocessors: {
            'webpack.tests.js': ['webpack']
        },
        reporters: ['spec'],
        webpack: Object.assign({}, webpackConfig, {
            devtool: 'inline-source-map', // just do inline source maps instead of the default
            watch: true,
            externals: {
                cheerio: 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true
            }
        }),
        webpackServer: {
            noInfo: true
        }
    });
};
