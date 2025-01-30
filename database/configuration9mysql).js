const mysql2 =require('mysql2/promise')


const config ={
    host:"localhost",
    user:"root",
    password: "",
    database:"jobsAPI"

}



const databaseconfig = mysql2.createPool(config)

module.exports ={databaseconfig}