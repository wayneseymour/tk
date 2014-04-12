module.exports = function(karma) {
  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: './',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      // 'test/mock/**/*.js',
      'test/unit/**/*.js'
    ],
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-phantomjs-launcher'],

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: true,
    singleRun: false,

    reporters: ['progress'],



    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'
    ]
  });
};



// // http://karma-runner.github.io/0.10/config/configuration-file.html

// module.exports = function(config) {
//   config.set({
//     // base path, that will be used to resolve files and exclude
//     basePath: '',

//     // testing framework to use (jasmine/mocha/qunit/...)
//     frameworks: ['jasmine'],

//     // list of files / patterns to load in the browser
//     files: [
//       'app/bower_components/angular/angular.js',
//       'app/bower_components/angular-mocks/angular-mocks.js',
//       'app/bower_components/angular-resource/angular-resource.js',
//       'app/bower_components/angular-cookies/angular-cookies.js',
//       'app/bower_components/angular-sanitize/angular-sanitize.js',
//       'app/bower_components/angular-route/angular-route.js',
//       'app/scripts/*.js',
//       'app/scripts/**/*.js',
//       'test/mock/**/*.js',
//       'test/spec/**/*.js'
//     ],

//     // list of files / patterns to exclude
//     exclude: [],

//     // web server port
//     port: 8080,

//     // level of logging
//     // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
//     logLevel: config.LOG_INFO,


//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: false,


//     // Start these browsers, currently available:
//     // - Chrome
//     // - ChromeCanary
//     // - Firefox
//     // - Opera
//     // - Safari (only Mac)
//     // - PhantomJS
//     // - IE (only Windows)
//     browsers: ['Chrome'],


//     // Continuous Integration mode
//     // if true, it capture browsers, run tests and exit
//     singleRun: false
//   });
// };
