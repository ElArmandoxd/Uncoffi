var usuario = "UnicoffiAdmin";
var contraseña = "12345678";

var usuario_lbl;
var contraseña_lbl;
var loginbtn;

loginbtn = document.getElementById("btn_login");


loginbtn.addEventListener("click", login);

function login()
{
    usuario_lbl = document.getElementById("inputName").value;
    contraseña_lbl = document.getElementById("inputPassword").value;
    if (usuario_lbl == usuario && contraseña_lbl == contraseña)
    {
        //alert("¡Bienvenido!");
        setTimeout("location.href='interfaz2Menu.html'");
    }
    else
    {
        //alert("Usuario y/o contraseña invalidos");
    }   
}
