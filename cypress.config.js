// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://dev.platform.creatingly.com',
//     pageLoadTimeout: 120000,
//     chromeWebSecurity: false, // disables some CSP & CORS restrictions
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://stg.platform.creatingly.com/apps/',
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    experimentalModifyObstructiveThirdPartyCode: true,
  },
})
