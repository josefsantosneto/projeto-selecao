const express = require('express');

const {httpGetAllEmployees, httpAddNewEmployee,} = require('./employees.controller');

const employeesRouter = express.Router();

employeesRouter.get('/', httpGetAllEmployees);

employeesRouter.post('/', httpAddNewEmployee);


module.exports = employeesRouter;