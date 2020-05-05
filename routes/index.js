const express   = require('express');
const router    = express.Router();

// Importar el express validator
const { body }  =   require('express-validator/check');

// Controlador
const proyectosController = require('../controllers/ProyectosControllers');

// Express no soporta Emacsript 6 por eso utilizamos module
module.exports = () => {
    // Ruta de index
    router.get('/', proyectosController.proyectosHome);
    
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);

    router.post('/nuevo-proyecto',
    body('nombre')
        .not()
        .isEmpty()
        .trim()
        .escape(),
    proyectosController.nuevoProyecto);

    // Listar proyecto
    router.get('/proyecto/:url', proyectosController.proyectoPorUrl);

    return router;
};