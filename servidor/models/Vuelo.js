const mongoose = require('mongoose');
const piloto = require("../models/Piloto");
const miembrotripu = require("../models/Miembro_tripulador");
const avion = require("../models/Avion");


const VueloSchema = mongoose.Schema({
    
    origen: {
        type: String,
        require: true
    },

    destino: {
        type: String,
        require: true
    },

    fechahora: {
        type: Date,
        default: Date.now()
    },

    piloto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: piloto.pilotox
    },

    avion_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: avion.avionx
    },

    tripulador_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: miembrotripu.tripulador
    },
});

module.exports = mongoose.model('Vuelo', AvionSchema)