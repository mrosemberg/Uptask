const Proyectos = require('../models/Proyectos')
const slug      = require('slug');

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina : "Proyectos",
        proyectos
    });
};

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina : "Nuevo Proyectos"
    });
};

exports.nuevoProyecto = async (req, res) => {
    // Enviar a la consola 
    // console.log('req.body :', req.body);

    // Validar que tengamos algo en el input

    const { nombre }  = req.body;
    let errores       = [];

    if (!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }

    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        });
    } else {
        // Primera manera de realizar
        // Proyectos.create({nombre})
        //     .then(() => console.log('Creado correctamente'))
        //     .catch(error => console.table(`Se ha producido un error: /n ${error}`));

        // Agregamos una url 
        let url        = slug(nombre).toLowerCase();
        
        // Segunda manera de realizar el insert
        const proyecto = await Proyectos.create({ nombre, url });
        
        res.redirect('/');
    }

};

exports.proyectoPorUrl = async (req, res) => {
    res.send(req.url);
};