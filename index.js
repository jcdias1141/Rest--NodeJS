const customExpress = require('./config/CustomExpress');

const conexao = require('./infraestrutura/conexao');

const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if(erro){
        console.log(erro);

    }else{
        console.log("Banco de dados conectado!")

        Tabelas.init(conexao)
        const app = customExpress();

        //Aqui vamos executar nosso servidor
        app.listen(3000,() =>{
            console.log('Servidor rodando na porta 3000!');
        })

    }
})