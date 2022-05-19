const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//const logger = require('./middleware/logger');

const app = express();



// Init middleware
// app.use(logger);

// Body Parser Middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/generator_diete.html', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'generator_diete.html'));
    /// public e numele directorului din care luam index.html
});

app.get('/index.html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/macros.html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'macros.html'));
})

app.get('/bibliografie.html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'bibliografie.html'));
})

app.get('/macros.html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'macros.html'));
})

app.get('/css/generator.css', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'css', 'generator.css'));
})

app.get('/css/Site.css', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'css', 'Site.css'));
})

app.get('/js/Form.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'js', 'Form.js'));
})

app.get('/js/bibliografie.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'js', 'bibliografie.js'));
})

app.get('/js/macros.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'js', 'macros.js'));
})

app.get('/js/Site.js', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'js', 'Site.js'));
})

app.post('/generator_diete.html', function (req, res) {
    //   const { preferinta, kcal_total } = req.body;
      console.log(req.body);
      console.log(req.body.preferinta);
      console.log(req.body.kcal_total);
    //   const preferinta = Date.now() - new Date(birthDate).getTime();
    //   const ageDays = Math.floor(age / (1000 * 60 * 60 * 24));
    //   res.send(`Salut, preferinta aleasa este ${req.body.preferinta}! Numarul total de calorii pe care le vei consuma astazi este de ${req.body.kcal_total} .`);
    res.send(`Salut, preferinta aleasa este ${req.body.preferinta}! Numarul total de calorii pe care le vei consuma astazi este de ${req.body.kcal_total} .`);
    });

//Set static folder
// app.use(express.static(path.join(__dirname, ('./public'))));
// app.use('/static', express.static(path.join(__dirname, 'public')))
// Members api routes
// app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
