const { saveEmployee, getAllEmployees} = require('../../models/registered-employees.model');

async function httpGetAllEmployees(req, res){
    const employees =  await getAllEmployees();
    return res.status(200).json(employees);
}

async function httpAddNewEmployee(req, res){
    const employee = req.body;
    employee.dataContratacao = new Date(employee.dataContratacao);
    employee.dataCadastro = new Date(employee.dataCadastro);
    employee.status = 'Ativo';
    await saveEmployee(employee);
    return res.status(201).json(employee);

}

module.exports = {
    httpGetAllEmployees,
    httpAddNewEmployee,
};