require('dotenv').config();
require('./config/database').connect();

const express= require('express');
const jwt= require('jsonwebtoken');


const app = express();

app.use(express.json());

const User = require('./model/user');

let TOKEN_KEY = 'gfg_jwt_secret_key';

app.post('/projet', async(req,res)=>{
    try{
        const{
            projetid,
            projetname,
            projetedress,
            projetmedia
        }= req.body;
        if(!(projetid && projetname && projetedress && projetmedia))
        {
            res.status(400).send('Todos os Campos devem ser preenchidos')
        }
        const projetexisting = await Projet.findOne({projetid});
        if(projetexisting)
        {
            return res.status(409).send("Projeto já Cadastrado")
        }
        const projet = await Projet.create({
            
            projetid: projetid,
            projetname:projetname,
            projetedress: projetedress,
            projetmedia: projetmedia

        });
        res.status(201).send('Projeto Salvo')
    }catch(err){
        console.log(err);
    }
})

app.route('/projet').get(function (req,res){
    projet.find({}, function(err,result){
        if(err)
        {
            res.send(err);

        } 
        else
        {
            res.send(result)
        }
        
    })

});

app.post()