//Labels de entrada del formulario.

var btn_registro = document.getElementById("btn_registrar");
btn_registro = btn_registro.addEventListener("click", nuevo_usuario);

//seccion de funciones ¡¡NO TOCAR SIN ANTES CONSULTAR A ARMANDO!!.

function nuevo_usuario()
{
    var nombre = document.getElementById("inputName");
    var nickname = document.getElementById("NombreUsuario");
    var matricula = document.getElementById("Matricula");
    var contraseña = document.getElementById("Contraseña");
    var usuario = new usuario(nombre,nickname,matricula,contraseña);
    console.log("Se ha creado " + usuario.id_usuario);
}

function usuario(nombre,nickname,matricula,contraseña)
{
    this.nombre = nombre;
    this.nickname = nickname;
    this.matricula = matricula;
    this.contraseña = contraseña;
}