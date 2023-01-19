const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
    codigoCargo:{type:Number, required: true},
    cargo:{type:String, required: true}
});

module.exports = mongoose.model('Cargo', cargoSchema);