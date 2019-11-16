var express = require('express')
var app = express()
var usuarios = require('./routes/usuarios');
const mariadb = require('mariadb');
const bodyParser = require('body-parser')
const path = require('path');
const axios = require('axios');

var db = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'avmaster1966',
    database: 'seq_db'
})


//app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use('/api',usuarios);


app.get('/', function (req, res) {
    res.send('holla mundo')
})

//app.get('/', (req, res) => {
  //  res.sendFile(__dirname + '/index.html')
//  })


app.listen(3000);