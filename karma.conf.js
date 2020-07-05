module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,
    debug:     true,
    browsers:  ['Chrome', 'Firefox'],

    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',

      'spec/spec_helper.js',

      'spec/fixtures/*.html',

      'lib/*.css',
      'lib/*.js',

      'spec/javascripts/**/*.js'
    ],

    frameworks:    ['jasmine', 'fixture'],
    logLevel:      config.LOG_ERROR,
    port:          9876,
    preprocessors: { '**/*.html': ['html2js'] },
    reporters:     ['dots'],
    singleRun:     true
  });
};
