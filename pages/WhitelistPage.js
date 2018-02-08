
const page=require('./Page.js');
const Page=page.Page;
const  by = require('selenium-webdriver/lib/by');
const By=by.By;

const fieldAddress=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div[2]/div[2]/div/div[1]/div[1]/input");
const fieldMin=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div[2]/div[2]/div/div[1]/div[2]/input");
const fieldMax=By.xpath("//*[@id=\"root\"]/div/section/div[3]/div[2]/div[2]/div/div[1]/div[3]/input");
const buttonAdd=By.className("button button_fill button_fill_plus");
const boxWhitelistingYes=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[2]/div/label[1]/span");
const boxWhitelistingNo=by.By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[2]/div[3]/div[2]/div/label[2]/span");



class WhitelistPage extends Page{
    constructor(driver){
        super(driver);
        this.URL='https://wizard.poa.network/3';

      }


    clickButtonAdd(){
        super.clickWithWait(buttonAdd);
    }
    clickCheckboWhitelistYes()
    {
        super.clickWithWait(boxWhitelistingYes);
    }
    clickCheckboWhitelistNo()
    {
        super.clickWithWait(boxWhitelistingNo);
    }


}




module.exports.WhitelistPage=WhitelistPage;
