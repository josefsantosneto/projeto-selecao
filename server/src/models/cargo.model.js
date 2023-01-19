const CargosDB = require('./cargo.mongo');

async function getAllRoles(){
    return await(CargosDB.find({}));
}

async function saveRole(role){
    await CargosDB.updateOne({
        codigoCargo:role.codigoCargo},
        role,{
            upsert:true,
        })

    }


module.exports = {
    getAllRoles,
    saveRole,
}