const EmployeesDB = require('./employees.mongo');

// const registeredEmployees =new Map();
// const { employees } = require('./employees.model');


// const emp = {
//     "nome" : "Rafannela",
//     "cpf" : "07215748405",
//     "email" : "jose@jose.com",
//     "status" : "Ativo",
//     "cargo" : "Dev",
//     "dataContratacao" : "December 27, 2030",
//     "senha" : "Abcd@1234",
//     "repetirSenha" : "Abcd@1234",
//     "matricula" : "0001",
//     "dataCadastro" : "December 27, 2030"
// }

// saveEmployee(emp);


async function getAllEmployees(){
    return await EmployeesDB.find({},{
        '_id':1, '__v':0,
    });

}

async function saveEmployee(employee){
    await EmployeesDB.updateOne({
        cpf:employee.cpf,
    }, employee, {
        upsert: true,
    });
}



function loadEmployees() {
    return new Promise((resolve, reject)=>{
       
        resolve();
    });

}

async function deleteEmployeeById(employeeId){
    EmployeesDB.deleteMany({_id:employeeId},(err, foundEmployee)=>{
        if(err){
            console.log(err)
        }else{
            return foundEmployee;
        }
    });
}


module.exports = {
    getAllEmployees,
    saveEmployee,
    loadEmployees,
    deleteEmployeeById,
}