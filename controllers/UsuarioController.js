const Usuario=require('../models/Usuario');

exports.obtenerUsuario= async(req, res)=>{
    try{
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);//[]
    }catch(error){
        return res.json(error)
        //console.log(error)
    }
}

exports.obtenerUsuarioPorId=async(req,res)=>{
    try{
const id=parseInt(req.params.id)
    const usuario= await Usuario.findByPk(id); //si existe lo encontrara
    if(!usuario){
         return res.status(400).json({
             mensaje:"usuario no encontrado"
         })
     }
         return res.json(Usuario) //si encuentra el usuario en la BD entregue los datos
    }catch(error){
        return res.status(401).json({mensaje: error})
    }
}


exports.crearUsuario=async(req,res)=>{
// //crear un nuevo usuario CREATE
// app.post("/usuarios/crear", (req, res)=>{
//     //console.log(req.body)
//     const {nombre, email}=req.body; //define la variable
//     //console.log(nombre, email)
//     const nuevoUsuario={
//         id:usuarios.length+1,
//         nombre:nombre,
//         email:email
//     }
//     //guardar el objeto creado en la BBDD
//     usuarios.push(nuevoUsuario)
//     res.status(201).json({
//         mensaje:"usuario creado correctamente",
//         usuarioCreado:nuevoUsuario
//     })
// })
}