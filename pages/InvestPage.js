console.log(module.filename);
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
const By=by.By;
const buttonContribute=By.xpath('//*[@id="root"]/div/div[1]/div[1]/div[2]/form/div[2]/a');


class InvestPage extends page.Page{

    constructor(driver){
        super(driver);
        this.URL='https://wizard.poa.network/invest?addr=0xA925660b2EFbcd1d2230d926c816a3a298A3aA77&networkID=4';


    }

    clickButtonContribute(){
        super.clickWithWait(buttonContribute);

    }

}
module.exports={
    InvestPage:InvestPage
}
