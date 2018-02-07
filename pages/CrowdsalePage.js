console.log(module.filename);
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
const By=by.By;
const buttonInvest=By.xpath('//*[@id="root"]/div/section/div[3]/a');


class CrowdsalePage extends page.Page{

    constructor(driver){
        super(driver);
        this.URL='https://wizard.poa.network/crowdsale?addr=0xA925660b2EFbcd1d2230d926c816a3a298A3aA77&networkID=4';


    }

    clickButtonInvest(){
        super.clickWithWait(buttonInvest);

    }

}
module.exports={
    CrowdsalePage:CrowdsalePage
    }
