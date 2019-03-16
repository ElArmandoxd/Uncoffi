//Labels de entrada del formulario.

var btn_registro = document.getElementById("btn_registrar");
btn_registro = btn_registro.addEventListener("click", nuevo_usuario);

//seccion de funciones ¡¡NO TOCAR SIN ANTES CONSULTAR A ARMANDO!!.

function nuevo_usuario()
{
    var usuario = new usuario(nombre,nickname,contraseña,matricula);
    id_usuario ++;
}

function usuario(nombre,nickname,contraseña,matricula,id_usuario)
{
    this.nombre = nombre;
    this.nickname = nickname;
    this.contraseña = contraseña;
    this.matricula = matricula;
    this.id_usuario = id_usuario + 1;
}