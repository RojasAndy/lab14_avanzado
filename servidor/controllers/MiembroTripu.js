const MiembroTripu = require("../models/MiembroTripu");

exports.crearMiembroTripu = async (req, res) => {
    try {
        const miembrotripu = new MiembroTripu(req.body);

        await miembrotripu.save();
        res.send(miembrotripu);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMiembroTripu = async (req, res) => {

    try {

        const miembrotripus = await MiembroTripu.find();
        res.json(miembrotripus);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarMiembroTripu = async (req, res) => {

    try {

        const {_id, tipo, mienbrotripu} = new MiembroTripu(req.body);
        let mienbrotripus = await MiembroTripu.findById(req.params.id);

        if(!mienbrotripus){
            res.status(404).json({ msg: 'No existe el miembro'});
        }

        mienbrotripu._id = _id;
        mienbrotripus.nombre = tipo;
      
        

        console.log(mienbrotripus)

        mienbrotripus = await MiembroTripu.findOneAndUpdate({ _id: req.params.id }, mienbrotripus, { new: true } );
        res.json(mienbrotripus);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verMienbroTripu = async (req, res) => {

    try {

        let mienbrotripus = await MienbroTripu.findById(req.params.id);

        if(!mienbrotripus){
            res.status(404).json({ msg: 'No existe la tripulacion'});
        }

        res.json(mienbrotripus);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarMienbroTripu = async (req, res) => {

    try {

        let mienbrotripus = await MienbroTripu.findById(req.params.id);

        if(!mienbrotripus){
            res.status(404).json({ msg: 'No existe el MienbroTripu'});
        }

        mienbrotripus = await MienbroTripu.findOneAndRemove(req.params.id);

        res.json({ msg: 'El mienbro: ' + mienbrotripus.mienbrotripu + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

