
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
const  buttonContinue= by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/a/span");


class WizardStep1 extends page.Page{

    constructor(driver){
        super(driver);
        this.URL;

    }

    clickButtonContinue(){
        super.clickWithWait(buttonContinue);

    }




}
module.exports.WizardStep1=WizardStep1;
