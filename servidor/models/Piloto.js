const mongoose = require('mongoose');
const base_regreso = require("../models/Base_Regreso");

base_regreso.base

const PilotoSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    fecha_de_vuelo: {
        type: Date,
        require: Date()
    },
    baseregreso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: base_regreso.base
    }
});
module.exports = mongoose.model('pilotox', ProductoSchema)