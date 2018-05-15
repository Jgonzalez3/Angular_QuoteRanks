require("../config/mongoose")();

const mongoose = require("mongoose");
module.exports = () =>{
    const AuthorSchema = new mongoose.Schema({
        name: {type: String, required:[true, "Name Required"], minlength:[3, "Name must have at least 4 characters"]},
        quotes: [{quote: {type: String, required:[true, "Quote Required"], minlength:[4, "Quote must have at least 3 characters"]}, vote: {type: Number, default: 0}}]
    }, {timestamps: true})
    Author = mongoose.model('Author', AuthorSchema);
}