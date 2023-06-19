const mongoose = require('mongoose');
const base_regreso = require("../models/Base_Regreso");

base_regreso.base

const AvionSchema = mongoose.Schema({
    
    tipo: {
        type: String,
        require: true
    },

    baseregreso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: base_regreso.base
    }
});

module.exports = mongoose.model('avionx', AvionSchema)