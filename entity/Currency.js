console.log(module.filename);
const fs = require('fs');
const tier=require('./Tier.js');
const Tier=tier.Tier;
const reservedTokens=require('./ReservedTokens.js');
const ReservedTokens=reservedTokens.ReservedTokens;
const whitelist=require('./Whitelist.js');
const Whitelist=whitelist.Whitelist;
class Currency{

    constructor()
    {
       this.name;
       this.ticker;
       this.walletAddress;
       this.reservedTokens=[];
       this.whitelist=[];
       this.gasPrice;
       this.minCap;
       this.whitelisting=false;
       this.tiers=[];
    }



    static createCurrency(fileName){
        var c=new Currency();
        c.parser(fileName);

        return c;

    }

   parser(fileName){

        var obj=JSON.parse(fs.readFileSync(fileName,"utf8"));

        this.name=obj.name;
        this.ticker=obj.ticker;
        this.decimals=obj.decimals;

       for (var i=0;i<obj.reservedTokens.length;i++)
       {
           this.reservedTokens.push(
               new ReservedTokens(
                   obj.reservedTokens[i].address,
                   obj.reservedTokens[i].dimension,
                   obj.reservedTokens[i].value
                   )
           )
       }


       this.walletAddress=obj.walletAddress;

        this.gasPrice=obj.gasprice;
        this.minCap=obj.mincap;
        this.whitelisting=obj.whitelisting;
        for (var i=0;i<obj.tiers.length;i++)
        {
            var wh;
            if (this.whitelisting) wh=obj.tiers[i].whitelist;
            else wh=null;
            this.tiers.push(
                new Tier(obj.tiers[i].name,
                    obj.tiers[i].allowModify,
                    obj.tiers[i].rate,
                    obj.tiers[i].supply,
                    obj.tiers[i].startTime,
                    obj.tiers[i].startDate,
                    obj.tiers[i].endTime,
                    obj.tiers[i].endDate,
                    wh

                )

                )
        }


    }

print(){
    console.log("name :"+this.name);
    console.log("ticker :"+this.ticker);
    console.log("decimals:"+this.decimals);
    console.log("Reserved Tokens:"+this.reservedTokens.length);

    for (var i=0;i<this.reservedTokens.length;i++)
    {
        console.log("reserved tokens#:"+i);
        console.log("Address:"+this.reservedTokens[i].address);
        console.log("Dimension:"+this.reservedTokens[i].dimension);
        console.log("Value:"+this.reservedTokens[i].value);

    }
    console.log("Whitelisting:"+this.whitelisting);
    console.log("WalletAddress:"+this.walletAddress);
    console.log("gasprice:"+this.gasPrice);
    console.log("mincap:"+this.minCap);


    console.log("Number of tiers:"+this.tiers.length);
    for (var i=0;i<this.tiers.length;i++)
    {
        console.log("Tier #"+i);
        console.log("name:"+this.tiers[i].name);
        console.log("allowModify:"+this.tiers[i].allowModify);
        console.log("startDate:"+this.tiers[i].startDate);
        console.log("startTime:"+this.tiers[i].startTime);
        console.log("endDate:"+this.tiers[i].endDate);
        console.log("endTime:"+this.tiers[i].endTime);
        console.log("rate:"+this.tiers[i].rate);
        console.log("supply:"+this.tiers[i].supply);
if(this.tiers[i].whitelist!=null) {
    console.log("Whitelist:" + this.tiers[i].whitelist.length);
    for (var j = 0; j < this.tiers[i].whitelist.length; j++) {
        console.log("whitelist#:" + j);
        console.log("Address:" + this.tiers[i].whitelist[j].address);
        console.log("Min:" + this.tiers[j].whitelist[j].min);
        console.log("Max:" + this.tiers[j].whitelist[j].max);

    }
}

    }

}

}

module.exports={
    Currency:Currency
}