const fs = require('fs');



class MetaMaskWallet {

    constructor() {
        this.privateKey;

        this.account;

    }
    static  createMetaMaskWallet(fileName){
        var c=new MetaMaskWallet();
        //by default
        c.account="0xF16AB2EA0a7F7B28C267cbA3Ed211Ea5c6e27411";
        c.privateKey="03c06a9fab22fe0add145e337c5a8251e140f74468d72eab17ec7419ab812cd0";
        c.parser(fileName);

        return c;

    }
    parser(fileName){

        var obj=JSON.parse(fs.readFileSync(fileName,"utf8"));
        this.account=obj.account;
        this.privateKey=obj.privateKey;
    }

}
module.exports={
    MetaMaskWallet:MetaMaskWallet
}