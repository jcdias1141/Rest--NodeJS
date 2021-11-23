//RESPONSAVEL POR TODAS AS CONFIGURAÇÕES DO NOSSO EXPRESS

const express = require('express');
const consig = require('consign');

const bodyParser = require('body-parser');//Usamos body-parser para conseguir ler os dados que estamos recebendo no body.
const { json } = require('body-parser');

module.exports = () =>{
    const app = express()
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    consig()
        .include('controllers')
        .into(app)

    return app
}
