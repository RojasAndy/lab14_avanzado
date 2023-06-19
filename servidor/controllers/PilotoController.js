const Piloto = require("../models/Piloto");
const path = require('path');

exports.crearPiloto = async (req, res) => {
    try {
        const avion = new Piloto(req.body);

        await piloto.save();
        res.send(avion);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPilotos = async (req, res) => {

    try {

        const pilotos = await Pilotos.find();
        res.json(pilotos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarPilotos = async (req, res) => {
    try {
      const { codigo, nombre, horasdevuelo, baseregreso } = req.body;
      let pilotos = await Producto.findById(req.params.id);
  
      if (!pilotos) {
        return res.status(404).json({ msg: 'No existe el piloto' });
      }
  
      pilotos.codigo = codigo;
      pilotos.nombre = nombre;
      pilotos.fecha_de_vuelo = fecha_de_vuelo;
      pilotos.baseregreso = baseregreso;
  
      await pilotos.save();
  
      res.json(pilotos);
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
    }
};

exports.verPilotos = async (req, res) => {

    try {

        let pilotos = await Piloto.findById(req.params.id);

        if(!pilotos){
            res.status(404).json({ msg: 'No existe el piloto'});
        }

        res.json(pilotos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarPiloto = async (req, res) => {

    try {

        let pilotos = await Piloto.findById(req.params.id);

        if(!pilotos){
            res.status(404).json({ msg: 'No existe el Piloto'});
        }

        await Piloto.deleteOne({ _id: req.params.id });

        res.json({ msg: 'El piloto: ' + pilotos.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

