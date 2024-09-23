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

import mongoose from 'mongoose';
const { MONGO_URI } = process.env;

export const connect = () => {
    mongoose.connect(MONGO_URI, {
        
    })
    .then(() => {
        console.log('Conectado com Sucesso!!!');
    })
    .catch((error) => {
        console.log("Erro de Conexão");
        console.log(error);
        process.exit(1);
    });
};
