const Usuario=require('../models/Usuario');

exports.obtenerUsuario= async(req, res)=>{
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}