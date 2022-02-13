
module.exports = app => {
    app.get('/', (req, res) => res.send('servidor rodando, tudo ok!'))
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimentos e está realizando um GET.'))
}