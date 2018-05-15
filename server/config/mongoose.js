const mongoose =  require("mongoose");

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/quoteranks');
    mongoose.Promise = global.Promise;
}