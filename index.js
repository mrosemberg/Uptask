// import express from 'express';
const express       = require('express');
const routes        = require('./routes');
const paht          = require('path');
const bodyParser    = require('body-parser');

// crear una app de express 
const app = express();

// Cargar los archivos estaticos
app.use(express.static('public'));

// Hablitar pug
app.set('view engine', 'pug');

// Anhadir la carpeta de las vistas
app.set('views', paht.join(__dirname, './views'));

// Habilitar body parse para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

// Rutas para el home 
app.use('/', routes());

// Puerto 
app.listen(3000);