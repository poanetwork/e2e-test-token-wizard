console.log(module.filename);
//const Web3 = require('web3');
const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      firefox = require('selenium-webdriver/firefox'),
      by = require('selenium-webdriver/lib/by');
const By=by.By;
const wizardWelcome=require('../pages/WizardWelcome.js');
const meta=require('../pages/MetaMask.js');
const buttonSubmit=require('../pages/MetaMask.js');
const wizStep1=require('../pages/WizardStep1.js');
const wizStep2=require('../pages/WizardStep2.js');
const wizStep3=require('../pages/WizardStep3.js');
const wizStep4=require('../pages/WizardStep4.js');
const baseTest=require('./BaseTest.js');
const tierpage=require('../pages/TierPage.js');
const TierPage=tierpage.TierPage;
const utils=require('../utils/Utils.js');
const openAnotherTab=utils.openAnotherTab;
const takeScreenshoot=utils.takeScreenshoot;
const gasPrice=5;
const Web3 = require('web3');
const fs = require('fs');
const currency= require('../entity/Currency.js');
const Currency=currency.Currency;
const metaMaskWallet=require('../entity/MetaMaskWallet.js');
const MetaMaskWallet=metaMaskWallet.MetaMaskWallet;
const blueScreen=require('../pages/WizardStep4.js');
const buttonContinue=require('../pages/WizardStep4.js');
const crowdPage=require('../pages/CrowdsalePage.js');
const invest=require('../pages/InvestPage.js');
const StartBrowserWithMetamask=require('../utils/Utils.js');
const startBrowserWithMetamask=StartBrowserWithMetamask.startBrowserWithMetamask;
const buttonOK=By.xpath('/html/body/div[2]/div/div[3]/button[1]');

//Check isCurrencyCreated
class Test1 extends baseTest.BaseTest {
    constructor(driver,currencyFile,accountFile,outputDirectory,configFile) {
        super(driver);
        this.currencyFile=currencyFile;
        this.accountFile=accountFile;
        this.outputDirectory=outputDirectory;
        this.configFile=configFile;
    }

   run() {
//@Before method
        var startURL=utils.getStartURL(this.configFile);
        if ((typeof startURL)=="undefined")startURL="https://wizard.poa.network/";

        var welcomePage = new wizardWelcome.WizardWelcome(this.driver,startURL);
        var wallet=MetaMaskWallet.createMetaMaskWallet(this.accountFile);
        var metaMask = new meta.MetaMask(this.driver,wallet);
        var wizardStep1 = new wizStep1.WizardStep1(this.driver);
        var wizardStep2 = new wizStep2.WizardStep2(this.driver);
        var wizardStep3 = new wizStep3.WizardStep3(this.driver);
        var wizardStep4 = new wizStep4.WizardStep4(this.driver);
        var crowdsalePage = new crowdPage.CrowdsalePage(this.driver);
        var investPage = new invest.InvestPage(this.driver);
        var cur=Currency.createCurrency(this.currencyFile);

        var tiers=[];
        for (var i=0;i<cur.tiers.length;i++)
            tiers.push(new TierPage(this.driver,cur.tiers[i]));

      //Steps....
var installMetaMask=utils.getInstallMetamask(this.configFile);

if (installMetaMask) {
    metaMask.open();
    metaMask.activate();
    welcomePage.switchToAnotherPage();
}

        welcomePage.open();
        welcomePage.clickButtonNewCrowdsale();
        this.driver.sleep(2000);
        wizardStep1.clickButtonContinue();
        this.driver.sleep(2000);
        wizardStep2.fillName(cur.name);
        wizardStep2.fillTicker(cur.ticker);
        wizardStep2.fillDecimals(cur.decimals);
        wizardStep2.clickButtonContinue();

        for (var i=0;i<cur.tiers.length-1;i++)
        {
        tiers[i].fillTier();
        wizardStep3.clickButtonAddTier();

        }
        tiers[cur.tiers.length-1].fillTier();
        wizardStep3.clickButtonContinue();
        this.driver.sleep(2000);
        this.driver.findElement(buttonContinue.buttonContinue)
            .catch(()=>{throw new Error('incorrect data in tiers');});



        metaMask.switchToAnotherPage();


        var before = utils.getTransactionCount(metaMask.wallet.account);

       for (var i=0;i<83;i++)
           doTransaction(before,this.driver,this.outputDirectory);

        var s=fs.readFileSync('tempAddr.txt',"utf8");

        console.log("Transaction were done: "+ before-s);
        return;



        function doTransaction(before,driver,outputDirectory) {
        driver.sleep(7000);
        metaMask.refresh();
        driver.sleep(1000);
        metaMask.isElementPresent(buttonSubmit.buttonSubmit).then(function (arr) {
                if (arr.length > 0) {

                    metaMask.submitTransaction();
                    }
                var c = utils.getTransactionCount(metaMask.wallet.account);
                console.log("Transaction #" + (c - before));
                if ((c - before) >= 0) {
                    welcomePage.switchToAnotherPage();
                    driver.sleep(1000);

                    driver.findElement(buttonOK).click()
                        .then((res)=>{console.log("ButtonOK");})
                        .catch((res)=>{

                        });


                    driver.findElement(buttonContinue.buttonContinue).click()
                        .then((res)=>{
                            driver.sleep(10000);
                            crowdsalePage.clickButtonInvest();
                            driver.sleep(10000);
                           driver.getCurrentUrl().then((res)=>{
                               console.log("Final invest page link: "+res);
                               fs.writeFileSync(outputDirectory+'/result.log', res);
                               fs.writeFileSync('./artifacts/result.log', res);//for circleci
                               utils.takeScreenshoot(driver,outputDirectory);
                           });


                            })
                        .catch((res)=>{
                            welcomePage.switchToAnotherPage();

                        })

                }


            });



}

}

}
module.exports.Test1=Test1;


