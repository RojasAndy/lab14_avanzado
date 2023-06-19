const mongoose = require('mongoose');
const base_regreso = require("../models/Base_Regreso");


const Miembro_tripuladorSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    baseregreso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: base_regreso.base
    }
});

module.exports = mongoose.model('tripulador', Miembro_tripuladorSchema.nombre)

