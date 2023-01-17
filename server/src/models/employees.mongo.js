const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
    cargo:{type:String, required: true}
});

const employeesSchema = mongoose.Schema({
    nome: {type:String, required: true,}, 
    cpf:{type:String, required: true,},
    email:{type:String, required: true,},
    status:{type:String, required: true,},
    cargo: {type:String, required: true,},
    dataContratacao: {type:Date, required: true,},
    senha:{type:String, required: true,},
    repetirSenha:{type:String, required: true,}, 
    matricula:{type:String, required: true,},
    dataCadastro: {type:Date, required: true,}, 
});

 
module.exports = mongoose.model('Employees', employeesSchema);