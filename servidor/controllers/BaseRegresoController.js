const BaseRegreso = require("../models/BaseRegreso");

exports.crearBaseRegreso = async (req, res) => {
    try {
        const baseregreso = new BaseRegreso(req.body);

        await baseregreso.save();
        res.send(baseregreso);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerBaseRegresos = async (req, res) => {

    try {

        const baseregresos = await baseregreso.find();
        res.json(baseregresos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarBaseRegreso = async (req, res) => {

    try {

        const {_id, tipo} = new BaseRegreso(req.body);
        let baseregres = await BaseRegreso.findById(req.params.id);

        if(!baseregres){
            res.status(404).json({ msg: 'No existe la base'});
        }

        baseregreso._id = _id;
        baseregres.tipo = tipo;  

        console.log(baseregres)

        baseregres = await BaseRegreso.findOneAndUpdate({ _id: req.params.id }, baseregres, { new: true } );
        res.json(baseregres);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verBaseRegreso = async (req, res) => {

    try {

        let baseregres = await BaseRegreso.findById(req.params.id);

        if(!baseregres){
            res.status(404).json({ msg: 'No existe la base'});
        }

        res.json(baseregres);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarBaseRegreso = async (req, res) => {

    try {

        let baseregres = await BaseRegreso.findById(req.params.id);

        if(!baseregres){
            res.status(404).json({ msg: 'No existe el baseregreso'});
        }

        baseregres = await BaseRegreso.findOneAndRemove(req.params.id);

        res.json({ msg: 'El base de regreso : ' + baseregres.baseregreso + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

