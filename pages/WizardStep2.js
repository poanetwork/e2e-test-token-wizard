const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      firefox = require('selenium-webdriver/firefox'),
      by = require('selenium-webdriver/lib/by');
const By=by.By;

const fieldName=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[1]/input");
const fieldTicker=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/input");
const fieldDecimals=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/input");
const buttonContinue=By.xpath("//*[@id=\"root\"]/div/section/div[3]/a");

class WizardStep2 extends page.Page {

    constructor(driver) {
        super(driver);
        this.URL = 'https://wizard.poa.network/2';
    }

fillName(name){
    super.fillWithWait(fieldName,name);
}
fillTicker(name){
    super.fillWithWait(fieldTicker,name);
}
fillDecimals(name){
    super.fillWithWait(fieldDecimals,name);
}


clickDecimals(){
    super.clickWithWait(fieldDecimals);

}


clickButtonContinue(){
    super.clickWithWait(buttonContinue);
}


}
module.exports.WizardStep2=WizardStep2;