exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina : "Proyectos"
    });
};

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina : "Nuevo Proyectos"
    });
};

exports.nuevoProyecto = (req, res) => {
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
    }

};