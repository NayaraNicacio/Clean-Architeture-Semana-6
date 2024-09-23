import dotenv from 'dotenv';
import connectDatabase from './config/database.js';
import express from 'express';
import jwt from 'jsonwebtoken';
import User from './model/user.js';
import Projet from './model/educacao.js';
import { use } from 'chai';

dotenv.config(); // Carregar variáveis de ambiente
connectDatabase(); // Conectar ao banco de dados

const app = express();
app.use(express.json());

let TOKEN_KEY = 'gfg_jwt_secret_key';

app.post('/projet', async (req, res) => {
    try {
        const {
            projetid,
            projetname,
            projetedress,
            projetmedia
        } = req.body;

        if (!(projetid && projetname && projetedress && projetmedia)) {
            res.status(400).send('Todos os Campos devem ser preenchidos');
            return;
        }

        const projetexisting = await Projet.findOne({ projetid });
        if (projetexisting) {
            return res.status(409).send("Projeto já Cadastrado");
        }

        const projet = await Projet.create({
            projetid,
            projetname,
            projetedress,
            projetmedia
        });

        res.status(201).send('Projeto Salvo');
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao salvar projeto');
    }
});

app.route('/projet').get(async (req, res) => {
    try {
        const result = await Projet.find({});
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

app.post('/user', async (req, res) => {
    try {
        const {
            email,
            username,
            password,
            watchList
        } = req.body;

        if (!(email && username && password && watchList)) {
            res.status(400).send('Todos os Campos são Obrigatórios');
            return;
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send('Usuário já Existe !');
        }

        const user = await User.create({
            email,
            username,
            password,
            watchList
        });

        const data = {
            time: Date.now(), // Atualiza para a data atual
            userId: 12,
        };

        const token = jwt.sign(data, TOKEN_KEY);
        user.token = token;

        res.status(201).send(token);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});

app.route('/users').get(async (req, res) => {
    try {
        const result = await User.find({});
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

export default app; // ES MODULE
