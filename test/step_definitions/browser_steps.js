const {browser} = require("protractor");
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');
const EC = protractor.ExpectedConditions;
setDefaultTimeout(60000);

When(/^I open "([^"]*)" url$/, async function(url) {
    await browser.get(url);
});


When(/^I wait "([^"]*)" seconds$/, function (secondsToSleep) {
    return browser.sleep(secondsToSleep * 1000);
});

When(/^I click "([^"]*)" link$/, function (upsell) {
    let upsellItem = element(by.xpath(`//a[div/h5[contains(text(),'${upsell}')]]`));
    return upsellItem.click();
});

Then (/^Page title should equal to "([^"]*)"$/, async function (title) {
    const titles = await element.all(by.xpath(`//title`)).getText();
    expect(title).to.include(titles[0]);

});

When(/^I type "([^"]*)" in Job ID$/, async function(keyword) {
    let fieldElement = element(by.xpath('//input[contains(@class, \'recruiting-search__input\')]'));
    await fieldElement.sendKeys(`${keyword}`);

});

When(/^I select "([^"]*)" location in Location$/, async function(optionValue) {
    let locationArrow = element(by.xpath('//span[@class="select2-selection__arrow"]'));
    await locationArrow.click();
    await browser.sleep(1000);
    let locationDropdownValue = element(by.xpath(`//li[@role='option'][text()='${optionValue}']`));
    await locationDropdownValue.click();
});

When(/^I click button with "([^"]*)" class$/, async function(buttonClass) {
    let findButton = element(by.xpath(`//button[contains(@class,'${buttonClass}')]`));
    await findButton.click();
});

When(/^I check "([^"]*)" in Skills$/, async function (optionText) {
    let locationDropDown = element(by.css('div.selected-params'));
    await locationDropDown.click();
    await browser.sleep(1000);
    let locationDropDownItem = element(by.xpath(`//span[contains(text(), '${optionText}')]`));
    return locationDropDownItem.click();

});

When(/^I close Accept Cookie pop-up$/, async function() {
    await element(by.css('button.cookie-disclaimer__button')).click();
});

Then (/^"([^"]*)" is returned in result list$/, async function (title) {
    const titles = await element.all(by.css(`ul.selected-items li`)).getText();
    expect(titles[0]).to.equal(title);
});

