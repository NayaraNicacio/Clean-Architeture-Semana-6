// ANTES DO ES MODULE

// const mongoose = require ('mongoose')
// const {MONGO_URI} = process.env;

// exports.connect = ()=>{
 
//     mongoose.connect('mongodb+srv://Semana-6:<db_password>@aprofunda.upohs.mongodb.net/?retryWrites=true&w=majority&appName=Aprofunda', {

//     }).then(()=> {
//         console.log('Conectado com Sucesso!!!')
//     }).catch((error)=> {
//         console.log("Erro de Conexão");
//         console.log(error);
//         process.exit(1);
//     })


// }

// DEPOIS ES MODULE

import { connect } from 'mongoose';

export default async () => {
    try {
        await connect(process.env.DB_URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};