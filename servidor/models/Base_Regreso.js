const mongoose = require('mongoose');

const Base_RegresoSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    }
    
});

module.exports = mongoose.model('base', Base_RegresoSchema)