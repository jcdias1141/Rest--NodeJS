//RESPONSAVEL POR TODAS AS CONFIGURAÇÕES DO NOSSO EXPRESS

const express = require('express');
const consig = require('consign');


module.exports = () =>{
    const app = express()
    consig()
        .include('controllers')
        .into(app)

    return app
}
