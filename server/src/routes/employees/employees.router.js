const express = require('express');

const {httpGetAllEmployees, httpAddNewEmployee, httpDeleteEmployee} = require('./employees.controller');

const employeesRouter = express.Router();

employeesRouter.get('/', httpGetAllEmployees);

employeesRouter.post('/', httpAddNewEmployee);

employeesRouter.delete('/:id', httpDeleteEmployee); 


module.exports = employeesRouter;