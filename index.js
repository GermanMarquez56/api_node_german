const express=require('express'); //importamos la libreria

const app=express()//instanciando una aplicacion tipo express

//req: request
//res: response
//ruta
/*
@app.route("/", method=["get", "post"])
def home():
    return "hola"
    */

app.get("/",(req, res)=>{
    res.send("backend con express")
});
const port=3000;

//ruta usuarios
//esto quedara en BBDD
let usuarios=[
    {id:1, nombre:"german", email:"german17@email.com"},
    {id:2, nombre:"marquez", email:"marquez56@email.com"},
    {id:3, nombre:"eduardo", email:"eduardo56@email.com"},
]

//ruta para obtener el listado de usuarios
app.get("/usuarios",(req,res)=>{
    res.json(usuarios)
});

//obtener usuarios por id

app.get("/usuarios/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    //console.log(typeof(id))
    const usuario=usuarios.find(user=>user.id===id)
    res.json(usuario)
})









app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto $(port)`)
})