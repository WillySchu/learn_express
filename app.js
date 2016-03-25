var express = require('express');
var app = express();
var vegetables = ['Carrot', 'Cucumber', 'Peas'];

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {name: 'Ellie'});
});

app.get('/new', function(req, res) {
  res.send('Congratulations on making a new route!');
});

app.get('/vegetables', function(req, res) {
  res.send(vegetables.join(', '));
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello ' + req.params.name);
});

app.get('/hi', function(req, res) {
  var name = req.query.name;
  res.send('Hello, ' + name);
});

app.get('/*', function(req, res) {
  res.status(404).send('Nothing here');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
