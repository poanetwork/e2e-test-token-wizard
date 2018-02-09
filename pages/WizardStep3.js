console.log(module.filename);
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');

const fieldWalletAddress=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[1]/input");
const fieldMinCap=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[1]/input");
const boxGasPriceSafe=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[1]/label/span");
const boxGasPriceNormal=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[2]/label/span");
const boxGasPriceFast=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[3]/label/span");
const boxGasPriceCustom=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/div[4]/label/span");
const fieldGasPriceCustom=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[2]/div[2]/input");
const buttonContinue=by.By.xpath("//*[@id=\"root\"]/div/section/div[5]/div/a");
const buttonAddTier=by.By.xpath("//*[@id=\"root\"]/div/section/div[5]/div/div");
const boxWhitelistingYes=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[2]/div/label[1]/span");
const boxWhitelistingNo=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[2]/div/label[2]/span");


class WizardStep3 extends page.Page{

    constructor(driver){
        super(driver);
        this.URL;
        this.tier;

    }

    clickButtonContinue(){
        super.clickWithWait(buttonContinue);

    }
    fillWalletAddress(address){
        super.clearField(fieldWalletAddress);
        super.fillWithWait(fieldWalletAddress,address);
    }


    clickCheckboxGasPriceSafe()
    {
        super.clickWithWait(boxGasPriceSafe);
    }
    clickCheckboxGasPriceNormal()
    {
        super.clickWithWait(boxGasPriceNormal);
    }
    clickCheckboxGasPriceFast()
    {
    super.clickWithWait(boxGasPriceFast);
    }
    clickCheckboxGasPriceCustom()
    {
        super.clickWithWait(boxGasPriceCustom);
    }
    fillGasPriceCustom(value){
        super.clearField(fieldGasPriceCustom);
        super.fillWithWait(fieldGasPriceCustom,value);
    }
    clickCheckboWhitelistYes()
    {
        super.clickWithWait(boxWhitelistingYes);
    }
    clickCheckboWhitelistNo()
    {
        super.clickWithWait(boxWhitelistingNo);
    }

    clickButtonAddTier()
    {

        super.clickWithWait(buttonAddTier);
    }

    setGasPrice(value){
switch(value){
    case 2:{this.clickCheckboxGasPriceSafe();break;}
    case 4:{this.clickCheckboxGasPriceNormal();break;}
    case 30:{this.clickCheckboxGasPriceFast();break;}
    default:{
        this.clickCheckboxGasPriceCustom();
        this.fillGasPriceCustom(value);
            }
            }
    }

    fillMinCap(value){
        super.clearField(fieldMinCap);
        super.fillWithWait(fieldMinCap,value);
    }


}
module.exports.WizardStep3=WizardStep3;
