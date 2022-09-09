const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  },
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://pet-instagram.vercel.app/',
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})
