// import express from 'express';
const express       = require('express');
const routes        = require('./routes');
const paht          = require('path');
const bodyParser    = require('body-parser');

// Helpers
const helpers = require('./helpers')

// Iniciarlizar la BD
const db = require('./config/db');

// Importar el modelo
require('./models/Proyectos');

// Conectar con MySql
db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch(error => console.log(`Error al conectar: ${error}`));

// crear una app de express 
const app = express();

// Cargar los archivos estaticos
app.use(express.static('public'));

// Hablitar pug
app.set('view engine', 'pug');

// Anhadir la carpeta de las vistas
app.set('views', paht.join(__dirname, './views'));

// Pasar var dump a la aplicacion
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

// Middleware
app.use((req, res, next) => {
    console.log('Middleware');
    next();
});

// Habilitar body parse para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

// Rutas para el home 
app.use('/', routes());

// Puerto 
app.listen(3000);