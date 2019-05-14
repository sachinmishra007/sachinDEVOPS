// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage-istanbul-reporter'), // <- Add plugin
      require('karma-junit-reporter'), // <- Add plugin
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../test-reports/vision-v2-CoverageResults'),
      reports: ['html', 'lcovonly', 'text-summary','cobertura'],
      fixWebpackSourcePaths: true
    },
    junitReporter: {
      useBrowserName: false,
      outputDir: require('path').join(__dirname, '../test-reports/vision-v2-TestResults'),
      // will be resolved to basePath (in the same way as files/exclude patterns)
      outputFile: 'karma-report.xml'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true, 
    browsers: ['Chrome', 'PhantomJS'], // <- Add browser,
    singleRun: false,
    restartOnFileChange: true
  });
};
