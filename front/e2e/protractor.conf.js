const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],

  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800x600", "--no-sandbox", "--disable-dev-shm-usage", "--disable-extensions"],
      directConnect: false, // Set directConnect at the top level
    }
  },

  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
