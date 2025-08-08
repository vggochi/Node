const express = require('express');
const app = express();

//Permitir receber dados em JSON
app.use(express.json());

//Simula um "banco de dados" em memória
let produtos =[
    {id: 1, nome:"Mouse"},
    {id: 2, nome:"Teclado"}
];

//GET - Lista todos os prdutos
app.get('/api/produtos',(req,res)=>{
    res.json(produtos);
});

//Post
app.post('/api/produtos',(req,res)=>{
    const novoProduto ={
        id:produtos.length +1,
        nome:req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})

app.get('/', (req, res) =>{
    res.send('Olá, este é o servidor com Express');
});

//rota sobre
app.get('/sobre',(req,res)=>{
    res.send('Página Sobre');
});

//rota produtos
app.get('/produtos',(req,res)=>{
    res.send('Lista de Produtos');
});

//rota que retorna JSON (simula uma API)
app.get('/api/produtos',(req,res)=>{
    const produtos = [
        {id: 1,nome:'Mouse'},
        {id: 2,nome:'Teclado'}
    ];
    res.json(produtos);
});

//inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log('Servidor rodando http://localhost:3000');
});
