const customExpress = require('./config/CustomExpress')

const app = customExpress()
//Aqui vamos executar nosso servidor
app.listen(3000,() =>{
    console.log('Servidor rodando na porta 3000!');
})

