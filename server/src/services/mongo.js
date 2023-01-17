const { default: mongoose } = require('mongoose');

require('dotenv').config();

const MONGO_URL = "mongodb+srv://"+ process.env.DB_KEY +"@cluster0.tnsju.mongodb.net/projeto-selecao"

mongoose.set('strictQuery', false)

mongoose.connection.once('open', ()=>{
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err)=>{
    console.log(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}


async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}

