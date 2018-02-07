console.log(module.filename);
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');

const fieldName=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[1]/input");
const fieldTicker=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/input");
const fieldDecimals=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/input");
const fieldAddress=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[1]/input");
const checkboxTokens=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[2]/div/label[1]/span");
const checkboxPercentage=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[2]/div/label[2]/span");
const fieldValue=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[3]/input");
const buttonAdd=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[2]/div");
const buttonContinue=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/a");

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

fillAddress(name){

    super.fillWithWait(fieldAddress,name);
}
fillValue(name){

    super.fillWithWait(fieldValue,name);
}
clickCheckboxPercentage(){
    super.clickWithWait(checkboxPercentage);

}
clickCheckboxTokens(){
    super.clickWithWait(checkboxTokens);
}
clickButtonAdd(){
    super.clickWithWait(buttonAdd);
}
clickButtonContinue(){
    super.clickWithWait(buttonContinue);
}


}
module.exports.WizardStep2=WizardStep2;