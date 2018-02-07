console.log(module.filename);
const fs = require('fs');
const tier=require('./Tier.js');
const Tier=tier.Tier;

class Currency{

    constructor()
    {
       this.name;
       this.ticker;
       this.decimals;
       this.address;
       this.dimension;
       this.value;
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
        this.address=obj.reserved.address;
        this.dimension=obj.reserved.dimension;
        this.value=obj.reserved.value;
        this.gasPrice=obj.gasprice;
        this.minCap=obj.mincap;
        this.whitelisting=obj.whitelisting;
        for (var i=0;i<obj.tiers.length;i++)
        {
            this.tiers.push(
                new Tier(obj.tiers[i].name,
                    obj.tiers[i].allowModify,
                    obj.tiers[i].rate,
                    obj.tiers[i].supply,
                    obj.tiers[i].startTime,
                    obj.tiers[i].startDate,
                    obj.tiers[i].endTime,
                    obj.tiers[i].endDate))
        }


    }

print(){
    console.log("name :"+this.name);
    console.log("ticker :"+this.ticker);
    console.log("decimals:"+this.decimals);
    console.log("address :"+this.address);
    console.log("dimens :"+this.dimension);
    console.log("value:"+this.value);
    console.log("gasprice:"+this.gasPrice);
    console.log("mincap:"+this.minCap);
    console.log("whitelist:"+this.whitelisting);

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
    }

}

}

module.exports={
    Currency:Currency
}