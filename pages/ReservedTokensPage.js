const page=require('./Page.js');
const Page=page.Page;
const  by = require('selenium-webdriver/lib/by');
const By=by.By;
const fieldAddress=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[1]/input");
const checkboxTokens=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[2]/div/label[1]/span");
const checkboxPercentage=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[2]/div/label[2]/span");
const fieldValue=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[1]/div[3]/input");
const buttonAdd=By.xpath("//*[@id=\"root\"]/div/section/div[2]/div[4]/div/div[2]/div");

class ReservedTokensPage extends Page{

    constructor(driver) {
        super(driver);
        this.URL = 'https://wizard.poa.network/2';

    }






    fillReservedTokens(reservedTokens){
        this.fillAddress(reservedTokens.address);
        this.setDimension(reservedTokens.dimension);
        this.fillValue(reservedTokens.value);

    }


    setDimension(dimension){
        if (dimension=='percentage') this.clickCheckboxPercentage();
        else this.clickCheckboxTokens();
    }


    fillAddress(address){

        super.fillWithWait(fieldAddress,address);
    }
    fillValue(value){

        super.fillWithWait(fieldValue,value);
    }

    clickCheckboxPercentage(){
        super.clickWithWait(checkboxPercentage);

    }
    clickCheckboxTokens(){
        super.clickWithWait(checkboxTokens);
    }
    clickButtonAddReservedTokens(){
        super.clickWithWait(buttonAdd);
    }



}
module.exports.ReservedTokensPage=ReservedTokensPage;