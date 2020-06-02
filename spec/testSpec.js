// Test article: https://www.netguru.com/codestories/which-javascript-ui-testing-framework-to-use-in-2020
// Test website: http://automationpractice.com/index.php

const {Builder, By, Key, until} = require('selenium-webdriver');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

it('User can log in', async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://automationpractice.com/index.php');
  await driver.findElement(By.xpath('//div[@class="header_user_info"]')).click()
  await driver.wait(until.elementLocated(By.id('email')));
  await driver.findElement(By.id('email')).sendKeys('example@netguru.com')
  await driver.findElement(By.id('passwd')).sendKeys('password', Key.RETURN)
  await driver.wait(until.titleContains("My account"));
  driver
    .getTitle()
    .then(title => {
      expect(title).toEqual('My account - My Store');
    });
  await driver.quit();
});
