const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //colocar ./ pra referenciar a mesma pasta (src)

const app = express();

app.use(cors());
app.use(express.json()); //antes de todas as requisições, converte todos os JSONS em objetos JavaScript
app.use(routes);

/*Rota / Recurso */

/*
    *Métodos HTTP:* 

    -GET: Buscar/listar uma informação no Backend
    -POST: Criar uma informação no Backend
    -PUT: Alterar uma informação no Backend
    -DELETE: Deletar uma informação no Backend
''
*/

 

/* 
        *Tipos de parâmetros*:

        Query Params: parmâmetros nomeados enviados na rota após o "?", geralmente servem pra filtros/paginação;
        Route Params: Parâmetros usados para identificar recursos
        Request Body: Corpo da requisição para criar ou alterar recursos
*/




/*
    *OPÇÕES SQL*

    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where() 
*/


app.listen(3333, () => console.log("Iniciando o servidor..."))