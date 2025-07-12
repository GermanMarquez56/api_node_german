const express=require('express'); //importamos la libreria
require("dotenv").config();//esto carga las variables de entorno
const sequelize=require("./config/database")
const router =require('./routes/UsuarioRoute')


const app=express()//instanciando una aplicacion tipo express
//const port=3000;

//esto permite leer un json que llegue por body
const port=process.env.PORT
app.use(express.json())


app.use('/', router);

//req: request
//res: response
//ruta
/*
@app.route("/", method=["get", "post"])
def home():
    return "hola"
    */

// app.get("/",(req, res)=>{
//     res.send("backend con express")
// });
// const port=3000;

// //ruta usuarios
// //esto quedara en BBDD
// let usuarios=[
//     {id:1, nombre:"german", email:"german17@email.com"},
//     {id:2, nombre:"marquez", email:"marquez56@email.com"},
//     {id:3, nombre:"eduardo", email:"eduardo56@email.com"},
// ]

// //ruta para obtener el listado de usuarios
// app.get("/usuarios/todos",(req,res)=>{
//     res.json(usuarios)
// });

// //obtener usuarios por id

// app.get("/usuarios/buscar/:id",(req,res)=>{
//     const id = parseInt(req.params.id);
//     //console.log(typeof(id))
//     const usuario=usuarios.find(user=>user.id===id)
//     //console.log(usuario)
//     if(!usuario){
//         res.status(404).json({
//             mensaje:"usuario no encontrado"
//         })
//     }
//     res.json(usuario)
// })

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

// //actualizar un usuario UPDATE
// app.put("/usuarios/actualizar/:id",(req, res)=>{
//     const {nombre, email}=req.body;
//     const id=parseInt(req.params.id);
//     //buscar
//     const usuario=usuarios.find(u=>u.id===id);
//     if(!usuario){
//         res.status=(404).json({
//             mensaje:"usuario a modificar no encontrado"
//         })
//     }
//     const infoAnterior=usuario; //guardo los datos encontrados
//     usuario.nombre=nombre; //modifica el campo nombre
//     usuario.email=email
    
//     res.status(202).json({
//         mensaje:"usuario modificado correctamente",
//         infoAnterior:infoAnterior,
//         infoNueva:usuario
//     })

// })

// //DELETE
// app.delete("/usuarios/eliminar/:id",(req, res)=>{
// //capturar el id pasado por parametros
// const id=parseInt(req.params.id);
// //encontrar el indice correspondiente al id entregado
// const index=usuarios.findIndex(user=>user.id===id)
// //eliminar de la lista la info del indice encontrado
// //console.log(index)
// if(index===-1){
//     res.status(404).json({
//         mensaje:`usuario con id ${id} no encontrado`
//     })
// }else{
//     usuarios.splice(index)
//     res.status(200).json({
//     mensaje:`usuario con id ${id} eliminado correctamente`
// })

// })

//sequelize sincroniza las base de datos con el proyecto
sequelize.sync().then(()=>{
    
    app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto ${port}`)
})

}).catch((error)=>{
    console.log(`error al conectar la Base de Datos ${error}`)
});


