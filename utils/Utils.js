//console.log(module.filename);
const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      firefox = require('selenium-webdriver/firefox'),
      by = require('selenium-webdriver/lib/by');
const fs = require('fs');
const Web3 = require('web3');

class Utils {


     openAnotherTab(driver, URL) {
        driver.executeScript('window.open("' + URL + '");');
    }

    focusOn(driver) {
        driver.executeScript('alert("Focus window")');
        driver.switchTo().alert().accept();
    }

    getStartURL(fileName) {
        var obj = JSON.parse(fs.readFileSync(fileName, "utf8"));
        return obj.startURL;

    }

    getInstallMetamask(fileName) {
        var obj = JSON.parse(fs.readFileSync(fileName, "utf8"));
        return obj.installMetaMask;

    }


    print(arr) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }


    }

    getTransactionCount(address) {

        var w = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
        var n = w.eth.getTransactionCount(address.toString());//returns Number
        //console.log(n);
        fs.writeFileSync("tempAddr.txt", n);
        return n;
    }

    takeScreenshoot(driver, path) {
        driver.takeScreenshot()
            .then((res) => {
                //console.log(res);
                var d = new Date();
                var buf = new Buffer(res, 'base64');


                fs.writeFileSync('./artifacts/screenshoot' + d.getTime() + '.png', buf);//for circleci
                fs.writeFileSync(path + "/screenshoot" + d.getTime() + '.png', buf);
            });

    }



    startBrowser() {
        var options = new chrome.Options();
        //options.addArguments("user-data-dir=/home/d/GoogleProfile");
        //options.addArguments('start-maximized');
        options.addArguments('disable-popup-blocking');
        options.addArguments('test-type');
        return new webdriver.Builder().withCapabilities(options.toCapabilities()).build();

    }



    startBrowserWithMetamask() {
        var source = 'MetaMask.crx';
        if (!fs.existsSync(source)) source = './node_modules/create-poa-crowdsale/MetaMask.crx';
        console.log(source);
        var options = new chrome.Options();
        options.addExtensions(source);
        //options.addArguments("user-data-dir=/home/d/GoogleProfile");
        //options.addArguments("user-data-dir=/home/d/.config/google-chrome/");

        options.addArguments('start-maximized');
        options.addArguments('disable-popup-blocking');
        //options.addArguments('test-type');
        return new webdriver.Builder().withCapabilities(options.toCapabilities()).build();

    }



    getScenarioFile(fileName) {
        var obj = JSON.parse(fs.readFileSync(fileName, "utf8"));
        return obj.scenario;

    }
    zoom(driver,z){
        driver.executeScript
        ("document.body.style.zoom = '"+z+"'");
    }
}
module.exports={
    Utils:Utils
}