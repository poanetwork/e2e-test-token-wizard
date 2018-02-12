

const test1=require('./tests/Test1.js');
const Test1=test1.Test1;
const test2=require('./tests/Test2.js');
const Test2=test2.Test2;
const utils=require('./utils/Utils.js');
const Utils=utils.Utils;
const page=require('./pages/Page.js');
const wizardWelcome=require('./pages/WizardWelcome.js');


const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      firefox = require('selenium-webdriver/firefox'),
      by = require('selenium-webdriver/lib/by');
const By=by.By;
const currency= require('./entity/Currency.js');
const Currency=currency.Currency;
const metaMaskWallet=require('./entity/MetaMaskWallet.js');
const MetaMaskWallet=metaMaskWallet.MetaMaskWallet;
const tierpage=require('./pages/TierPage.js');
const TierPage=tierpage.TierPage;
const Web3 = require('web3');
const fs = require('fs');
///////////////////////////////////////
//createPOACrowdsale('config.json');

function createPOACrowdsale(configFile) {
    if (!fs.existsSync("./artifacts"))
    fs.mkdirSync("./artifacts");//for CIRCLECI
    var driver;
    var util=new Utils();
   if (util.getInstallMetamask(configFile))
        driver = util.startBrowserWithMetamask();
    else
        driver=util.startBrowser();


     var testWizard = new Test1(driver,configFile);
    testWizard.run();

}

module.exports={
    createPOACrowdsale:createPOACrowdsale
}




