//Rutas producto
const express = require('express');
const router = express.Router();
const vuelo = require('../controllers/VueloController');

//api/productos
router.post('/', vueloController.crearVuelo);
router.get('/', vueloController.obtenerVuelos);
router.put('/:id', vueloController.actualizarVuelo);
router.get('/:id', vueloController.verVuelo);
router.delete('/:id', vueloController.eliminarVuelo);

module.exports = router;