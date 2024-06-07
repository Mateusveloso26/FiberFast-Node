// IMPORTANDO O EXPRESS,HANDLEBARS,BODY-PARSER,NODEMAILER,DOTENV
const express = require('express')
const { engine } = require('express-handlebars')
const bp = require('body-parser')
const dotenv = require('dotenv').config();
const nodemailer = require("nodemailer");

const app = express()
const PORT = process.env.PORT || 3000;

// CONFIG BODY PARSER
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

//CONFIG HANDLEBARS
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// PASTA  PUBLIC
app.use(express.static('public'))

// ROTAS GET
app.get('/home', (req, res) => {
  res.render('home');
});
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/sobre', (req, res) => {
  res.render('sobre')
})

app.get('/planos', (req, res) => {
  res.render('planos')
})

app.get('/contato', (req, res) => {
  res.render('contato')
})


// CONFIG NODEMAILER
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.SENHA,
  },
});

app.post('/contato', (req, res) => {

  async function main() {
    const { nome, email, telefone, mensagem } = req.body;
    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "CLIENTE ENTROU EM CONTATO",
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
    });

  
  }
  res.send(`<script> alert("O formulário foi enviado com sucesso!"); window.location.href = "/home"; </script>`);
});

// INICIALIZAR SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta http://localhost:${PORT}`)
});
