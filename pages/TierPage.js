console.log(module.filename);
const key = require('selenium-webdriver').Key;
const page=require('./Page.js');
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
const By=by.By;
var COUNT_TIERS=0;
const fieldAddressTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div[2]/div[2]/div/div[1]/div[1]/input");
const fieldAddress1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldAddress2="]/div[2]/div[2]/div/div[1]/div[1]/input";

const fieldMinTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div[2]/div[2]/div/div[1]/div[2]/input");
const fieldMin1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldMin2="]/div[2]/div[2]/div/div[1]/div[2]/input";

const fieldMaxTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div[2]/div[2]/div/div[1]/div[3]/input");
const fieldMax1="//*[@id=\"root\"]/div/section/div[4]/div[";
const fieldMax2="]/div[2]/div[2]/div/div[1]/div[3]/input";

const buttonAdd=By.className("button button_fill button_fill_plus");
const buttonAdd1="//*[@id=\"root\"]/div/section/div[4]/div[";
const buttonAdd2="]/div[2]/div[2]/div/div[2]/div";

const fieldNameTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[1]/div[1]/input\n");
const checkboxModifyOffTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[1]/div[2]/div/label[2]/span\n");
const checkboxModifyOnTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[1]/div[2]/div/label[1]/span");
const fieldRateTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[3]/div[1]/input");
const fieldSupplyTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[3]/div[2]/input");
const fieldStartTimeTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[2]/div[1]/input");
const fieldEndTimeTier1=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div/div[2]/div[2]/input");

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
        this.URL;
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
        this.setModify();
        this.fillStartTime();
        this.fillEndTime();
        if (this.tier.whitelist!=null)
        this.fillWhitelist();

    }

    fillSetupName()
    {

        let locator;
        if (this.number==0) {locator=fieldNameTier1;}
        else {locator=by.By.xpath(fieldName1+this.number+fieldName2);}
        super.clearField(locator);
        super.fillWithWait(locator,this.tier.name);

    }
    fillRate()
    {
        let locator;
        if (this.number==0) {locator=fieldRateTier1;}
        else {locator=by.By.xpath(fieldRate1+this.number+fieldRate2);}
        super.clearField(locator);
        super.fillWithWait(locator,this.tier.rate);
    }
    fillSupply()
    {
        let locator;
        if (this.number==0) {locator=fieldSupplyTier1;}
        else {locator=by.By.xpath(fieldSupply1+this.number+fieldSupply2);}
        super.clearField(locator);
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

    fillWhitelist(){
        for (var i=0;i<this.tier.whitelist.length;i++) {
            this.fillAddress(this.tier.whitelist[i].address);
            this.fillMin(this.tier.whitelist[i].min);
            this.fillMax(this.tier.whitelist[i].max);
            this.clickButtonAdd();


        }

    }
    fillAddress(address){
        let locator;
        if (this.number==0) {locator=fieldAddressTier1;}
        else {locator=by.By.xpath(fieldAddress1+this.number+fieldAddress2);}
        super.fillWithWait(locator,address);
        this.driver.sleep(500);


    }
    fillMin(value){
        let locator;
        if (this.number==0) {locator=fieldMinTier1;}
        else {locator=by.By.xpath(fieldMin1+this.number+fieldMin2);}
        super.fillWithWait(locator,value);
    }
    fillMax(value){

        let locator;
        if (this.number==0) {locator=fieldMaxTier1;}
        else {locator=by.By.xpath(fieldMax1+this.number+fieldMax2);}
        super.fillWithWait(locator,value);
    }
    clickButtonAdd(){
        let locator;
        if (this.number==0) {locator=buttonAdd}
        else {locator=By.xpath(buttonAdd1+this.number+buttonAdd2);}

        super.clickWithWait(locator);
    }



}
module.exports.TierPage=TierPage;
