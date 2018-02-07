## Scrypt for creating new crowdsale   https://wizard.poa.network/


## Getting Started

### Installation
```
 git clone https://github.com/dennis00010011b/TetsingWizardPOA.git
```
```
  npm install create-poa-crowdsale
```
### Usage
```
  const CreatePOACrowdsale=require('create-poa-crowdsale');

  const createPOACrowdsale=CreatePOACrowdsale.createPOACrowdsale;

  var myCrowdsale=createPOACrowdsale("crowdsale.json","account.json","./results", "config.json");
```
where:
* ```crowdsale.json```  is _.json_ file  (see example below) with crowdsale's parameters. Should be located in project working directory.
* ```account.json```  is _.json_ file in working directory (see example below) with data for Etherium wallet (Rinkeby network only). Should be located in project working directory.
* ```pathToOutputDirectory``` is relative path from working directory to folder with expected result of scrypt executing. If folder doesn't exist it will be created.
* ```config.json``` is _.json_ file in working directory (see example below) with configuration parameters.
See file's examples below or 
* ```~/node_modules/create-poa-crowdsale/crowdsale.json```
* ```~/node_modules/create-poa-crowdsale/account.json```
* ```~/node_modules/create-poa-crowdsale/config.json```


### Prerequisites

* Google-chrome browser should be installed


## Scrypt performs:

 * open pre-installed Chrome browser
 * install MetaMask Chrome extension: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en
 * activate MetaMask with given account number and private key (only Rinkeby network). Data from ```AccountDataFile```
 * go through POA Wizard with given data from ```CrowdsaleDataFile```
 * save result's files in ```pathToOutputDirectory```
 * package includes the file   ```./circleci/config.yml```   for CI server: https://circleci.com/

### Example  ```crowdsale.json```:
```
{
    "name": "MyCoin",
    "ticker": "MCQ",
    "decimals": 3,
    "reserved":
    {
        "address" :"0x1234567890987654321234",
        "dimension": "tokens",
        "value": 100
    },
    "gasprice": 20,
    "mincap": 100,
    "whitelisting": true,
    "tiers":[
    {
       "name":"tier1",
        "allowModify": false,
        "startDate": "08/09/2018",
        "startTime": "12:39am",
        "endDate":"08/10/2018",
        "endTime":"1:34pm",
        "rate":2,
        "supply": 999
    },
    {
        "name":"tier1",
        "allowModify": false,
        "startDate": "08/08/2019",
        "startTime": "2:34am",
        "endDate":"08/10/2019",
        "endTime":"11:34pm",
        "rate":40,
        "supply": 2300
    }]

}
```

### Example  ```account.json```:
```
    {
    "account": "0xF16AB2EA0a7F7B28C267cbA3Ed211Ea5c6e27411",
    "privateKey": "03c06a9fab22fe0add145e337c5a8251e140f74468d72eab17ec7419ab812cd0"
    }
 ```
 
 ### Example  ```config.json```:
 ```
    {
      "startURL" : "https://wizard.poa.network/",
      "installMetaMask":true
    }
  ```
 
 