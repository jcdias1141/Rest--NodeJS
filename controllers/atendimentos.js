//arquivo para controlar a rota atendimentos

module.exports = app => {
    app.get('/atendimentos', (req, res) => 
    res.send('Você esta na rota de atendimentos, realizando um GET seja muito bem vindo!'));

    app.post('/atendimentos', (req, res) => 
    res.send ('Você está na rota de atendimentos e está realizando um POST'));
}    