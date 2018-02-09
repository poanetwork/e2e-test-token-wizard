## Scrypt for creating new crowdsale   https://wizard.poa.network/


## Getting Started

### Installation
```
 https://github.com/poanetwork/e2e-test-token-wizard
```
```
  npm install create-poa-crowdsale
```
### Usage
```
  const CreatePOACrowdsale=require('create-poa-crowdsale');

  const createPOACrowdsale=CreatePOACrowdsale.createPOACrowdsale;

  var myCrowdsale=createPOACrowdsale( "config.json");
```
where:

* ```config.json``` is _.json_ file in working directory (see example below) with configuration parameters.


See file's examples below or 

* ```~/node_modules/create-poa-crowdsale/config.json```


### Prerequisites

* Google-chrome browser should be installed


## Scrypt performs:

 * open pre-installed Chrome browser
 * install MetaMask Chrome extension: https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en
 * activate MetaMask with given account number,private key and network. Data from ```config.json```
 * go through Token Wizard with given data in  ```scenario file``` (field "scenario" in ```config.json```) 
 * save result's files in ```./result*``` , folder will be created
 * package includes the file   ```./circleci/config.yml```   for CI server: https://circleci.com/
### Example  ```config.json```:
 ```
    {
      "startURL" : "https://wizard.poa.network/",
      "installMetaMask":true,
      "scenario":"T1RnWn.json"
    }
  ```
### Example  ```scenario.json```:
```
{
    "account": "0xF16AB2EA0a7F7B28C267cbA3Ed211Ea5c6e27411",
    "privateKey": "03c06a9fab22fe0add145e337c5a8251e140f74468d72eab17ec7419ab812cd0",
    "networkID":4,


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


 where networkID=
 ```
 0,1,2 - Main Etherium network;
 3 - Ropsten;
 4 - Rinkeby;
 42 - Kovan;
 77 - Sokol;
 99 - Poa core;
 8545 - localhost 8545
 ```
 
 
 
 