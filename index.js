
const meta=require('./pages/MetaMask.js');
const user=require('./pages/User.js');
const baseTest=require('./tests/BaseTest.js');
const test1=require('./tests/Test1.js');
const page=require('./pages/Page.js');
const wizardWelcome=require('./pages/WizardWelcome.js');

const utils=require('./utils/Utils.js');
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
//createPOACrowdsale('crowdsale.json','account.json','./results', 'config.json');

function createPOACrowdsale(currencyFile,accountFile,outputDirectory, configFile) {

    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory);
    }

    var dirForCircle='./artifacts';     //for CIRCLECI
    if (!fs.existsSync(dirForCircle)) {
        fs.mkdirSync(dirForCircle);
    }
    var driver;
    if (utils.getInstallMetamask(configFile))
     driver = utils.startBrowserWithMetamask();
    else driver=utils.startBrowser();
    var testWizard = new test1.Test1(driver,currencyFile,accountFile,outputDirectory,configFile);
    testWizard.run();

}

module.exports={
    createPOACrowdsale:createPOACrowdsale
}




