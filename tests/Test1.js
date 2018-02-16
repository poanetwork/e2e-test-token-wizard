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
const reservedTokensPage=require('../pages/ReservedTokensPage.js');
const ReservedTokensPage=reservedTokensPage.ReservedTokensPage;

const transactionPage=require('../pages/TransactionPage.js');
const TransactionPage=transactionPage.TransactionPage;

const TierPage=tierpage.TierPage;
const util=require('../utils/Utils.js');
const Utils=util.Utils;
const Web3 = require('web3');
const fs = require('fs');
const currency= require('../entity/Currency.js');
const Currency=currency.Currency;
const metaMaskWallet=require('../entity/MetaMaskWallet.js');
const MetaMaskWallet=metaMaskWallet.MetaMaskWallet;
const buttonContinue=require('../pages/WizardStep4.js');
const crowdPage=require('../pages/CrowdsalePage.js');
const invest=require('../pages/InvestPage.js');
const timeLimitTransactions=80;
//Check isCurrencyCreated
class Test1 extends baseTest.BaseTest {
    constructor(driver,configFile) {
        super(driver);
        this.configFile=configFile;

    }
    async run() {

      var outputPath=Utils.getOutputPath('config.json');

      if ((typeof outputPath)== "undefined") outputPath="./results";

        if (!fs.existsSync(outputPath))
            fs.mkdirSync(outputPath);
        var outputPath=outputPath+"/result"+Utils.getDate();
        if (!fs.existsSync(outputPath))
        fs.mkdirSync(outputPath);
        var outputFile=outputPath+"/results"+Utils.getDate()+".log";
        fs.writeFileSync(outputFile, "Test start time:"+Utils.getDate()+"\n");
        ////////////
        var startURL=Utils.getStartURL(this.configFile);
        if (typeof startURL=="undefined")startURL="https://wizard.poa.network/";

        var scenarioFile=Utils.getScenarioFile(this.configFile);

        var welcomePage = new wizardWelcome.WizardWelcome(this.driver,startURL);
        var wallet=MetaMaskWallet.createMetaMaskWallet(scenarioFile);
        //wallet.print();return;
        var metaMask = new meta.MetaMask(this.driver,wallet);
        var wizardStep1 = new wizStep1.WizardStep1(this.driver);
        var wizardStep2 = new wizStep2.WizardStep2(this.driver);
        var wizardStep3 = new wizStep3.WizardStep3(this.driver);
        var wizardStep4 = new wizStep4.WizardStep4(this.driver);
        var crowdsalePage = new crowdPage.CrowdsalePage(this.driver);
        var investPage = new invest.InvestPage(this.driver);
        var cur=Currency.createCurrency(scenarioFile);

        var tiers=[];
        for (var i=0;i<cur.tiers.length;i++)
            tiers.push(new TierPage(this.driver,cur.tiers[i]));

           var reservedTokens=new ReservedTokensPage(this.driver);

           //Steps....

var installMetaMask=Utils.getInstallMetamask(this.configFile);

if (installMetaMask) {
    metaMask.open();
    metaMask.activate();
    welcomePage.switchToAnotherPage();
}

        welcomePage.open();
        welcomePage.clickButtonNewCrowdsale();
        this.driver.sleep(2000);
        wizardStep1.clickButtonContinue();
        this.driver.sleep(500);
        wizardStep2.fillName(cur.name);

        wizardStep2.fillTicker(cur.ticker);
        wizardStep2.fillDecimals(cur.decimals);

          for (var i=0;i<cur.reservedTokens.length;i++)
            {
             reservedTokens.fillReservedTokens(cur.reservedTokens[i]);
             reservedTokens.clickButtonAddReservedTokens();
            }
       Utils.zoom(this.driver,0.5);
        Utils.takeScreenshoot(this.driver,outputPath);
        Utils.zoom(this.driver,1);


        wizardStep2.clickButtonContinue();

       wizardStep3.fillWalletAddress(cur.walletAddress);
       wizardStep3.setGasPrice(cur.gasPrice);
       if (cur.whitelisting) wizardStep3.clickCheckboWhitelistYes();
       else (wizardStep3.fillMinCap(cur.minCap));
        Utils.takeScreenshoot(this.driver,outputPath);

        for (var i=0;i<cur.tiers.length-1;i++)
        {
        tiers[i].fillTier();
            Utils.takeScreenshoot(this.driver,outputPath);

            wizardStep3.clickButtonAddTier();

        }
        tiers[cur.tiers.length-1].fillTier();
        Utils.takeScreenshoot(this.driver,outputPath);



        wizardStep3.clickButtonContinue();

        this.driver.sleep(2000);
        this.driver.findElement(buttonContinue.buttonContinue)
            .catch(()=>{throw new Error('incorrect data in tiers');});



//////////////////////////////////////////////////////////////////////////////
       var trPage=new TransactionPage(this.driver);
        //var before = Utils.getTransactionCount(metaMask.wallet.account);
        var trCounter=0;
        var b=true;
        var timeLimit=timeLimitTransactions*cur.tiers.length;
        do {
            metaMask.switchToAnotherPage();
            this.driver.sleep(6000);
            metaMask.refresh();
            this.driver.sleep(1000);
            if ( await metaMask.isElementPresent(buttonSubmit.buttonSubmit)) {
                metaMask.submitTransaction();
                trCounter++;
                console.log("Transaction#"+trCounter);
            }
            welcomePage.switchToAnotherPage();
           this.driver.sleep(1000);
            if (!(await trPage.isTitlePresent())) {
                this.driver.sleep(2000);
                trPage.clickButtonOk();
                b=false;
            }
            if((timeLimit--)==0)
            {  var s="Deployment failed.Transaction were done:"+ trCounter;
               fs.appendFileSync(outputFile,s+"\n");
               console.log(s);
               b=false;}
        } while (b);


        Utils.takeScreenshoot(this.driver,outputPath);
        this.driver.sleep(5000);
        wizardStep4.clickButtonContinue();
        this.driver.sleep(5000);
        Utils.takeScreenshoot(this.driver,outputPath);
        //this.driver.sleep(10000);
       b=true;
       var counter=30;

        do {
            try {
                this.driver.sleep(1000);
                crowdsalePage.clickButtonInvest();
                b=false;
            }
            catch (err){
                counter++;
            }
        } while (b);
        Utils.takeScreenshoot(this.driver,outputPath);
        this.driver.getCurrentUrl().then((res)=>{
            console.log("Final invest page link: "+res);
            fs.appendFileSync(outputFile, "\n\Final invest page link: \""+res+"\n");

          });
        s="Transaction were done: "+ trCounter;
        console.log(s);
        fs.appendFileSync(outputFile,s);
        fs.appendFileSync(outputFile, "Test end time:"+Utils.getDate()+"\n");

        return;


}

}
module.exports.Test1=Test1;


