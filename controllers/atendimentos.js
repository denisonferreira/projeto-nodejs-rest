const { send } = require('express/lib/response')
const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/', (req, res) => res.send('servidor rodando, tudo ok!'))

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        //console.log(req.params)

        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
            //res.send('Ok')
    })

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
            //res.send('você está na rota de atendimentos e está realizando um Post.')
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}