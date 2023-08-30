const express = require('express');
const app = express();
const port = 3000;

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// Rota para a página principal
app.get('/', (req, res) => {
    res.render('calculadora');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log('O servidor do Guilherme está online!');
});
