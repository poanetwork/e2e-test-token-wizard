class Tier{
    constructor(name,allowModify,rate,supply,startTime,startDate,endTime,endDate,whitelist){


        this.name=name;
        this.allowModify=allowModify;
        this.rate=rate;
        this.supply=supply;
        this.startTime=startTime;
        this.startDate=startDate;
        this.endTime=endTime;
        this.endDate=endDate;
        this.whitelist=whitelist;
    }




}




module.exports.Tier=Tier;
