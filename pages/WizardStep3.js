console.log(module.filename);
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');

const fieldWalletAddress=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[1]/input");
const fieldMiniCap=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[1]/input");
const checkboxGasPrice5Gwei=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[1]/label/span");
const checkboxGasPrice10Gwei=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[2]/label/span");
const checkboxGasPrice15Gwei=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[3]/label/span");
const checkboxGasPriceCustom=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[4]/label/span");
const fieldGasPriceCustom=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/input");
const checkboxWhitelistingYes=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[2]/div/label[1]/span");
const checkboxWhitelistingNo=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[2]/div/label[2]/span");
const buttonContinue=by.By.xpath("//*[@id=\"root\"]/div/section/div[5]/div/a");
const buttonAddTier=by.By.xpath("//*[@id=\"root\"]/div/section/div[5]/div/div");


class WizardStep3 extends page.Page{

    constructor(driver){
        super(driver);
        this.URL='https://wizard.poa.network/3';
        this.tier;

    }

    clickButtonContinue(){
        super.clickWithWait(buttonContinue);

    }


    clickCheckboxGasPrice5Gwei()
{
    super.clickWithWait(checkboxGasPrice5Gwei);
}
    clickButtonAddTier()
    {
        super.clickWithWait(buttonAddTier);
    }

}
module.exports.WizardStep3=WizardStep3;
