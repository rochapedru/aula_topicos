const express = require("express");
const app = expres();
const pot = 3000;

const gerarPares = (n) =>{
    const pares = [];
    for(let i = 0; i <= n; i+=2) {
        pares.push(i);
    }
    return pares;
};

app.get('/gerarPares/:n',(req,resp)=> {
    const n = parseInt(req.params.n,10);
    const resultado = gerarPares(n);
    resp.json(resultado);
});

app.listen(port,()=>{
    console.log('Servidor rodando' );
});