const express = require('express');
const res = require('express/lib/response');

const app = express ();
let usuarios = [];

app.get('/usuarios', (req, res) => {
    return res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const { nome, sobrenome } = req.body;

    console.log("nome:", nome, "sobrenome:", sobrenome);

    const usuario = {
        nome: nome,
        sobrenome: sobrenome
    }

    usuarios.push(usuario);

    return res.json(usuario);
    
});


app.listen(3000, () => {
    console.log('Servidor aberto na porta 3000');
});
