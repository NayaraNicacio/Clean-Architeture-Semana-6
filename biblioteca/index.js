// import http from 'http';
// import app from './app.js';

// const server = http.createServer(app);

// const port = process.env.PORT || 4001;

// server.listen(port, () => {
//     console.log(`Servidor rodando na porta ${port}`);
// });

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// Configura o dotenv
dotenv.config();

// Cria a instância do express
const app = express();

// Conecta ao banco de dados
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro de conexão ao MongoDB:', err);
});

// Configura a porta
const PORT = process.env.PORT || 4001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
