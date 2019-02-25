var na = "Sin especificar";

var contador1 = 0;
var contador2 = 0;

var hamburguesa = new comida(na,35,"Hamburguesa");
var hamburguesa_pp = new comida(na, 38, "Hamburguesa con papas");
var burro_des = new comida("Deshebrada", 13, "burro");
var burro_dis = new comida("Discada", 13, "burro");
var burro_chi = new comida("Chicharron", 13, "burro");
var burro_poch = new comida("Pollo en chipotle", 13, "burro");
var burro_pimx = new comida("Picadillo a la mexicana", 13, "burro");
var burro_pirj = new comida("Picadillo rojo", 13, "burro");
var burro_pivd = new comida("Picadillo verde", 13, "burro");
var burro_pofa = new comida("Fajitas de pollo", 19, "burro");

var boton1_cancelar = document.getElementById("btn_1_cancel");
var boton2_cancelar = document.getElementById("btn_2_cancel");

var total = 0;
var boton1 = document.getElementById("btn_1");
var boton2 = document.getElementById("btn_2");

boton1_cancelar = boton1_cancelar.addEventListener("click", cancelar1);

boton1 = boton1.addEventListener("click", añadir1);
boton2 = boton2.addEventListener("click", añadir2);

function guisos(sabor)
{
    this.sabor = sabor;
}

function desayuno(guiso, huevo, chilaquiles)
{
    this.guiso = guiso;
    this.huevo = huevo;
    this.chilaquiles = chilaquiles;
}

function comida(tipo, precio, nombre)
{
    this.tipo = tipo;
    this.precio = precio;
    this.nombre = nombre;
}

function añadir1()
{
    console.log("Se ha añadido al pedido: " + hamburguesa.nombre);
    total = total + hamburguesa.precio;
    contador1 ++;
}

function añadir2()
{
    console.log("Se ha añadido al pedido un Burro");
    total = total + burro;
    contador2 ++;
}

function cancelar1()
{
    if(contador1 >= 1)
    {
        console.log("Se ha eliminado: " + hamburguesa.nombre + " del pedido");
        total = total - hamburguesa.precio;
        contador1 --;
    }
    else
    {
        alert("No se ha encontrado elemento en el pedido");
    }
    
}

function cancelar2()
{
    if(contador2 >= 1)
    {
        console.log("Se ha eliminado: " + burro_des.nombre + " del pedido");
        total = total - burro_des.precio;
        contador2 --;
    }
    else
    {
        alert("No se ha encontrado elemento en el pedido");
    }
    
}


