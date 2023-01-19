const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const employeesRouter = require('./routes/employees/employees.router')
const cargosRouter = require('./routes/cargos/cargos.router');

app.use(cors({
    origin: 'http://localhost:3000',
    methods:['GET', 'POST', 'DELETE'],
    allowedHeaders:['Content-type', 'Access-Control-Allow-Origin'],
    
}));

app.use('/employees', employeesRouter);
app.use('/cargos', cargosRouter);

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public','index.html'));
});



module.exports = app;