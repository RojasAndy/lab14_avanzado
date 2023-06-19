//Rutas producto
const express = require('express');
const router = express.Router();
const baseregreso= require('../controllers/BaseregresoController');

//api/productos
router.post('/', baseregresoController.crearBaseregreso);
router.get('/', baseregresoController.obtenerBaseregresos);
router.put('/:id', baseregresoController.actualizarBaseregreso);
router.get('/:id', baseregresoController.verBaseregreso);
router.delete('/:id', baseregresoController.eliminarBaseregreso);

module.exports = router;