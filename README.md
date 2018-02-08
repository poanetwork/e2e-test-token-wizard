## Scrypt for creating new crowdsale   https://wizard.poa.network/


## Getting Started

### Installation
```
 https://github.com/poanetwork/e2e-test-token-wizard#installation
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
    "name": "MySuperCoin",
    "ticker": "MSC",
    "decimals": 0,
    "reservedTokens":[
       {
        "address" :"0x6f53002497203d167771eb0852b4c1caDA7a585f",
        "dimension": "percentage",
        "value": 20
       },
       {
         "address" :"0x42f0143F2E9Ab64CA3811bbA08E40D798C18E7f4",
         "dimension": "tokens",
         "value": 10
       }],
    "walletAddress":"0xF16AB2EA0a7F7B28C267cbA3Ed211Ea5c6e27411",
    "gasprice": 100,
    "mincap": 1,
    "whitelisting":false,
    "tiers":[
       {
       "name":"###1",
        "allowModify": true,
        "startDate": "02/07/2018",
        "startTime": "4:40pm",
        "endDate":"02/07/2018",
        "endTime":"8:00pm",
        "rate":100,
        "supply": 200,
        "whitelist":[
          {
          "address":"0x6f53002497203d167771eb0852b4c1caDA7a585f",
          "min":6,
          "max":100
          },
          {
           "address":"0x42f0143F2E9Ab64CA3811bbA08E40D798C18E7f4",
           "min":8,
           "max":55
          }]
       },
       {
        "name":"###2",
        "allowModify": true,
        "startDate": "08/08/2019",
        "startTime": "2:34am",
        "endDate":"08/10/2019",
        "endTime":"11:34pm",
        "rate":40,
        "supply": 2300,
        "whitelist":[
        {
         "address":"0x6f53002497203d167771eb0852b4c1caDA7a585f",
         "min":6,
         "max":100
        },
        {
         "address":"0x42f0143F2E9Ab64CA3811bbA08E40D798C18E7f4",
         "min":8,
         "max":55
        }]
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
 
 