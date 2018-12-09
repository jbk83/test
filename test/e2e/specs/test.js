// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.product-card')
      .click('.btn-product:nth-of-type(1)')
      .click('.btn-product:nth-of-type(1)')
      .assert.containsText('.navBar-item[href="#/cart"]', 'Panier (2)')
      .click('.navBar-item[href="#/cart"]')
      .click('.btn-cart')
      .assert.containsText('.cart-empty', 'Votre panier est vide.')
      .end()
  }
}
