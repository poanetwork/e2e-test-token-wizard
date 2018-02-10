const by = require('selenium-webdriver/lib/by');
const page=require('./Page.js');
const Page=page.Page;
const By=by.By;
const fieldContract1="//*[@id=\"root\"]/div/div[1]/section/div[3]/div/div[1]/div/div[2]/div["

const fieldContract2="]/div";
const buttonContinue=By.xpath("//*[@id=\"root\"]/div/div[1]/section/div[3]/div/div[1]/div/div[3]/div");
                               //*[@id="root"]/div/div[1]/section/div[3]/div/div[1]/div/div[2]/div[1]/div
                               //*[@id="root"]/div/div[1]/section/div[3]/div/div[1]/div/div[2]/div[1]/div
const contracts=By.className("text");
//const contracts=By.className("table-row clickable");

class ManagePage extends Page
{
    constructor(driver) {
        super(driver);
        this.URL;

    }

   async selectContracts(contract){
        for (var i=1;i<100;i++) {
            var s = By.xpath("" + fieldContract1 + i + fieldContract2);
            this.driver.findElement(s).click();
            var q = await this.driver.findElement(s).getText();
            if (q.toString() == contract) {this.driver.findElement(s).click();i=1000;}

        }





    }

    clickContract(contract){


    }
    clickButtonContinue(){
        super.clickWithWait(buttonContinue);
    }



}
module.exports={
    ManagePage:ManagePage
}