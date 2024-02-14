const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'mochawesome',
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: "cypress/report/",
    //reportFilename: "index.html",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
