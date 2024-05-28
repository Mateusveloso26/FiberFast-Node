// IMPORTANDO O EXPRESS,HANDLEBARS,BODY-PARSER,MULTER,NODEMAILER,DOTENV
const express = require('express')
const { engine } = require('express-handlebars')
const bp = require('body-parser')
const dotenv = require('dotenv').config();
const nodemailer = require("nodemailer");

const app = express()


// CONFIG BODY PARSER
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

//CONFIG HANDLEBARS
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// PASTA  PUBLIC
app.use(express.static('public'))

// ROTAS GET
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
  service: 'gmail',
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
    
    console.log(req.body);
    console.log("Message sent: %s", info.messageId);
  }

  res.send('<script>alert("O formulário foi enviado com sucesso!"); window.location.href="/home";</script>');
  main().catch(console.error);

});

app.get('/home', (req, res) => {
  res.render('home'); 
});
// INICIALIZAR SERVIDOR
app.listen(3000, () => {
  console.log('Servidor funcionando na porta http://localhost:3000')
})
