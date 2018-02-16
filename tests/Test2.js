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
//const utils=require('../utils/Utils.js');
//const Utils=utils.Utils;
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
        do {} while(!await  mngPage.isAvailable());
        var contract="0x7eB29E0922C87D728c81A9FAB66e97668c917108";
        mngPage.URL=startURL+"manage/"+contract;
        mngPage.open();
        //this.driver.sleep(5000);

        do{

        } while(!await mngPage.isPresentButtonFinalize());
        console.log(await mngPage.isAvailableDistribute());

        mngPage.clickButtonFinalize();
       // if (mngPage.isAvailableDistribute())mngPage.clickButtonDistribute();
        //if (mngPage.isAvailableFinalize()) mngPage.clickButtonFinalize();








    }

}
module.exports.Test2=Test2;


