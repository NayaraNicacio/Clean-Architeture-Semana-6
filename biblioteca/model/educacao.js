const mongoose = require('mongoose')

const projetSchema = new mongoose.Schema(
    {
    projetid:{type:String, unique:true},
    projetname:{ type: String},
    projetedress:{ type: String},
    projetmedia:{type: String}
});

module.exports = mongoose.model('projet', projetSchema);