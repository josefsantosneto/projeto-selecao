const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
    codigoCargo:{type:String, required: true},
    cargo:{type:String, required: true}
});

module.exports = mongoose.model('Cargo', cargoSchema);