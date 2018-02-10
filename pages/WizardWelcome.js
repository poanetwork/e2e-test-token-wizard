
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      firefox = require('selenium-webdriver/firefox'),
      by = require('selenium-webdriver/lib/by');

const buttonNewCrowdsale=by.By.css("#root > div > div:nth-child(2) > section > div.crowdsale > div > div > a > span");
const buttonChooseContract=by.By.xpath("//*[@id=\"root\"]/div/div[1]/section/div[1]/div/div/div");

class WizardWelcome extends page.Page{

    constructor(driver,URL){
        super(driver);
        this.URL=URL;

    }

    open()
    {
        this.driver.get(this.URL);

    }

    clickButtonNewCrowdsale(){
        super.clickWithWait(buttonNewCrowdsale);



    }
    clickButtonChooseContract(){
        super.clickWithWait(buttonChooseContract);
        }

    open()
    {
        this.driver.get(this.URL);

    }



}
module.exports.WizardWelcome=WizardWelcome;
