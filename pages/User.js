console.log(module.filename);
//module.exports=
    class User{
    constructor (name){
        this._name=name}


    name() {
        return this._name;
    }
    print(){console.log("Hi User");}
}

module.exports=
    {
        User : User,

}