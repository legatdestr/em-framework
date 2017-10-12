var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'src/**/*.jsx'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'src/**/*.jsx': ['webpack']
    },
    webpack: webpackConfig, 
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}