const { saveEmployee, getAllEmployees, deleteEmployeeById} = require('../../models/registered-employees.model');

async function httpGetAllEmployees(req, res){
    const employees =  await getAllEmployees();
    return res.status(200).json(employees);
}

async function httpAddNewEmployee(req, res){
    const employee = req.body;
    employee.dataContratacao = new Date(employee.dataContratacao);
    employee.dataCadastro = new Date(employee.dataCadastro);
    await saveEmployee(employee);
    return res.status(201).json(employee);

}

async function httpDeleteEmployee(req, res){
    const employeeId = req.params.id;

    await deleteEmployeeById(employeeId);

    res
}
module.exports = {
    httpGetAllEmployees,
    httpAddNewEmployee,
    httpDeleteEmployee,
};