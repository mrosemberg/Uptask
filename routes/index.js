const express   = require('express');
const router    = express.Router();

// Controlador
const proyectosController = require('../controllers/ProyectosControllers');

// Express no soporta Emacsript 6 por eso utilizamos module
module.exports = () => {
    // Ruta de index
    router.get('/', proyectosController.proyectosHome);
    
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);

    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

    return router;
};