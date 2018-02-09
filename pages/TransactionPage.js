const page=require('./Page.js');
const Page=page.Page;
const  by = require('selenium-webdriver/lib/by');
const By=by.By;
const buttonOK=By.xpath('/html/body/div[2]/div/div[3]/button[1]');
const title=By.xpath('//*[@id="root"]/div/section/div[4]/div/p');
class TransactionPage extends Page{

    constructor(driver) {
        super(driver);
        this.URL;

    }

    isButtonOkPresent(){
        return super.isElementPresent(buttonOK);
    }
    isTitlePresent(){
        return super.isElementPresent(title);
    }




    clickButtonOk(){
        super.clickWithWait(buttonOK);
    }



}
module.exports.TransactionPage=TransactionPage;