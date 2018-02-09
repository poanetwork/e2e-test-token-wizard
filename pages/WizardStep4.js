
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
const By=by.By;

const buttonContinue=By.xpath("//*[@id=\"root\"]/div/section/div[3]/a");
const buttonDownload=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div");
const blueScreen=By.xpath('//*[@id="root"]/div/section/div[4]/div[2]/div');


class WizardStep4 extends page.Page{

    constructor(driver){
        super(driver);
        this.URL;


    }

    clickButtonContinue(){
        super.clickWithWait(buttonContinue);

    }
    clickButtonDownload(){
        super.clickWithWait(buttonDownload);

    }




}
module.exports={
    WizardStep4:WizardStep4,
    blueScreen:blueScreen,
    buttonContinue:buttonContinue
}
