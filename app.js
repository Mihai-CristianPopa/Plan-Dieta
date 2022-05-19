const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,"404.html"));
    next();
  });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'generator_diete.html'));
  console.log(path.join(__dirname, 'generator_diete.html'));
});

// app.use(function(req,res){
//     res.status(404).render('404.html');
// });

app.post('/', function (req, res) {
//   const { preferinta, kcal_total } = req.body;
  console.log(req.body);
  console.log(req.body.preferinta);
  console.log(req.body.kcal_total);
//   const preferinta = Date.now() - new Date(birthDate).getTime();
//   const ageDays = Math.floor(age / (1000 * 60 * 60 * 24));
//   res.send(`Salut, preferinta aleasa este ${req.body.preferinta}! Numarul total de calorii pe care le vei consuma astazi este de ${req.body.kcal_total} .`);
res.send(`Salut, preferinta aleasa este ${req.body.preferinta}! Numarul total de calorii pe care le vei consuma astazi este de ${req.body.kcal_total} .`);
});

app.listen(process.env.PORT || 3001,  ()=> console.log("Server started on port 3001"));