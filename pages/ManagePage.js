const by = require('selenium-webdriver/lib/by');
const page=require('./Page.js');
const Page=page.Page;
const By=by.By;

const firstContract=By.xpath("//*[@id=\"root\"]/div/div[1]/section/div[3]/div/div[1]/div/div[2]/div[1]/div");
const buttonDistribute=By.xpath("//*[@id=\"root\"]/div/section/div[1]/div/a/span");
const buttonFinalize=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div/a/span");

class ManagePage extends Page
{
    constructor(driver) {
        super(driver);
        this.URL;

    }
    //https://wizard.poa.network/manage/0x7eB29E0922C87D728c81A9FAB66e97668c917108
open(){

this.driver.get(this.URL);

}
async isAvailable(){
       return await super.isElementPresent(firstContract);
}
async isAvailableDistribute(){
    return await this.driver.findElement(buttonDistribute).isEnabled();
}
async isAvailableFinalize(){
    return await this.driver.findElement(buttonFinalize).isEnabled();
}
async isPresentButtonFinalize(){
    return await super.isElementPresent(buttonFinalize);
}

async clickButtonDistribute(){
     super.clickWithWait(buttonDistribute);
}

    clickButtonFinalize(){
        this.driver.sleep(500);
        super.clickWithWait(buttonFinalize);
    }







}
module.exports={
    ManagePage:ManagePage
}