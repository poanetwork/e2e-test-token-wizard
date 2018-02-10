//const Web3 = require('web3');
const key = require('selenium-webdriver').Key;
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    by = require('selenium-webdriver/lib/by');
const By=by.By;

const wizardWelcome=require('../pages/WizardWelcome.js');
const meta=require('../pages/MetaMask.js');
const managePage=require('../pages/ManagePage.js');
const ManagePage=managePage.ManagePage;
const baseTest=require('./BaseTest.js');
const utils=require('../utils/Utils.js');
const Utils=utils.Utils;
const Web3 = require('web3');
const fs = require('fs');
const metaMaskWallet=require('../entity/MetaMaskWallet.js');
const MetaMaskWallet=metaMaskWallet.MetaMaskWallet;

class Test2 extends baseTest.BaseTest {
    constructor(driver,configFile) {
        super(driver);
        this.configFile=configFile;

    }
    async run() {

        const utils=new Utils();
        var startURL=utils.getStartURL(this.configFile);

        var welcomePage = new wizardWelcome.WizardWelcome(this.driver,startURL);
        var scenarioFile=utils.getScenarioFile(this.configFile);
        var wallet=MetaMaskWallet.createMetaMaskWallet(scenarioFile);
        var metaMask = new meta.MetaMask(this.driver,wallet);
        var mngPage=new ManagePage(this.driver);

        metaMask.open();




        metaMask.activate();

        welcomePage.switchToAnotherPage();
        welcomePage.open();


        welcomePage.clickButtonChooseContract();






this.driver.sleep(2000);
        var contract="0x71bE64E8f9a2A0A497FAF084d80b8e8BB2b5c3A5";
      //  var s;
         await mngPage.selectContracts(contract);
//console.log(s.length());
        utils.zoom(this.driver,1.75);
        this.driver.sleep(2000);
        utils.zoom(this.driver,1.5);
        //mngPage.clickButtonContinue();

    }

}
module.exports.Test2=Test2;


