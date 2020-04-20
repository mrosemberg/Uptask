const Sequelize   = require('sequelize');
const db          = require('../config/db');
const slug        = require('slug');
const shortId   = require('shortid');
const Proyectos       = db.define('proyectos', {
    id : {
        type          : Sequelize.INTEGER,
        primaryKey    : true,
        autoIncrement : true
    },
    nombre            : Sequelize.STRING,
    url               : Sequelize.STRING
}, {
    hooks: {
        beforeCreate(proyecto){
            console.log('Antes de Insertar en la base de datos.');

            let url         = slug(proyecto.nombre).toLowerCase();
            
            proyecto.url    = `${url}-${shortId.generate()}`;
        }
    }
});

module.exports        = Proyectos;