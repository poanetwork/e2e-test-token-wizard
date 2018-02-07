console.log(module.filename);
const key = require('selenium-webdriver').Key;
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
var COUNT_TIERS=0;

const fieldNameTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[1]/div[1]/input\n");
const checkboxModifyOffTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[1]/div[2]/div/label[2]/span\n");
const checkboxModifyOnTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[1]/div[2]/div/label[1]/span");
const fieldRateTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[3]/div[1]/input");
const fieldSupplyTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[3]/div[2]/input");
const fieldStartTimeTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[2]/div[1]/input");
const fieldEndTimeTier1=by.By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[2]/div[2]/input");

const fieldName1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldName2="]/div/div[1]/div[1]/input";
const fieldRate1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldRate2="]/div/div[3]/div[1]/input";


const fieldSupply1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldSupply2="]/div/div[3]/div[2]/input\n";

const checkboxModifyOn1="//*[@id=\"root\"]/div/section/div[4]/div[";
const checkboxModifyOn2="]/div/div[1]/div[2]/div/label[1]/span\n";
const checkboxModifyOff1="//*[@id=\"root\"]/div/section/div[4]/div[";
const checkboxModifyOff2="]/div/div[1]/div[2]/div/label[2]/span\n";

const fieldStartTime1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldStartTime2="]/div/div[2]/div[1]/input";

const fieldEndTime1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldEndTime2="]/div/div[2]/div[2]/input";


class TierPage extends page.Page{

    constructor(driver,tier){
        super(driver);
        this.URL='https://wizard.poa.network/1';
        this.tier=tier;
        this.number=COUNT_TIERS++;


    }
    print(){
        console.log(typeof(this.tier));
    }

    fillTier()
    {
        this.fillSetupName();
        this.fillRate();
        this.fillSupply();
      //  this.setModify();
        this.fillStartTime();
        this.fillEndTime();

    }

    fillSetupName()
    {
        let locator;
        if (this.number==0) {locator=fieldNameTier1;}
        else {locator=by.By.xpath(fieldName1+this.number+fieldName2);}
        super.fillWithWait(locator,this.tier.name);

    }
    fillRate()
    {
        let locator;
        if (this.number==0) {locator=fieldRateTier1;}
        else {locator=by.By.xpath(fieldRate1+this.number+fieldRate2);}
        super.fillWithWait(locator,this.tier.rate);
    }
    fillSupply()
    {
        let locator;
        if (this.number==0) {locator=fieldSupplyTier1;}
        else {locator=by.By.xpath(fieldSupply1+this.number+fieldSupply2);}
        super.fillWithWait(locator,this.tier.supply);

    }

    setModify() {
        let locator;
        if (this.number == 0)
            if (this.tier.allowModify) {
                locator = checkboxModifyOnTier1;
            }
            else {
                locator = checkboxModifyOffTier1;
            }
        else {

            if (this.tier.allowModify) {
            locator = by.By.xpath(checkboxModifyOn1 + this.number + checkboxModifyOn2);
            }
            else {
            locator = by.By.xpath(checkboxModifyOff1 + this.number + checkboxModifyOff2);
                 }
             }
        super.clickWithWait(locator);

    }
    fillStartTime()
    {
        let locator;
        if (this.number==0) {locator=fieldStartTimeTier1;}
        else {locator=by.By.xpath(fieldStartTime1+this.number+fieldStartTime2);}
        super.fillWithWait(locator,this.tier.startDate);
        const action=this.driver.actions();
        action.sendKeys(key.TAB).perform();
        super.fillWithWait(locator,this.tier.startTime);

        //this.driver.findElement(locator).sendKeys(webdriver.Key.TAB);
       // super.fillWithWait(locator,"06:59PM");
    }
    fillEndTime()
    {
        let locator;

       if (this.number==0) {locator=fieldEndTimeTier1;}
        else {locator=by.By.xpath(fieldEndTime1+this.number+fieldEndTime2);}
       super.fillWithWait(locator,this.tier.endDate);
        const action=this.driver.actions();
        action.sendKeys(key.TAB).perform();
        super.fillWithWait(locator,this.tier.endTime);



    }



}
module.exports.TierPage=TierPage;
