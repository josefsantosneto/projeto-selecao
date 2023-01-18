const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
    cargo:{type:String, required: true}
});

module.exports = mongoose.model('Cargo', cargoSchema);