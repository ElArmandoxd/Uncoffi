//variables con motivo de soporte logico, solo para poder realizar operaciones de forma mas sencilla.

var pedido = [null];
var na = "Sin especificar";
var seleccion;
var seleccion_pica; 
var id_usuario = 0;
var total = 0;

//contadores para el numero de pedidos.

var contador1 = 0;
var contador2 = 0;

//aquí están las comidas ya declaradas con objeto con atributos.

var hamburguesa = new comida(na,35,"Hamburguesa");
var hamburguesa_pp = new comida(na, 38, "Hamburguesa con papas");
var burro = new comida(guisos, 13, "Burro de " + guisos.nombre);


// aquí están todos los guisos que se pueden usar tanto en burros, gorditas, sincronizadas etc.

var deshebrada = new guisos("Deshebrada", "normal");
var discada = new guisos("Discada", "normal");
var chicharron = new guisos("Chicharron", "normal");
var pollo_chi = new guisos("Pollo con chipotle", "normal");
var picadillo = new guisos("Picadillo: ", picadillo.tipo);
var fajas_pollo = new guisos("Fajitas de pollo", "normal");

//botones para cancelar pedidos.

var boton1_cancelar = document.getElementById("btn_1_cancel");
var boton2_cancelar = document.getElementById("btn_2_cancel");

//botones para añadir pedidos y ordenar.

var boton1 = document.getElementById("btn_1");
var boton2 = document.getElementById("btn_2");
var boton_ordenar = document.getElementById("btn_ordenar");
var boton_borrar = document.getElementById("borrar_pedido");
var modal_in = document.getElementById("modal_interno");
var modal_in2 = document.getElementById("modal_interno2");
var modal_in3 = document.getElementById("modal_interno3");

boton1_cancelar = boton1_cancelar.addEventListener("click", cancelar1);

boton1 = boton1.addEventListener("click", añadir1);
boton2 = boton2.addEventListener("click", añadir2);
boton_ordenar = boton_ordenar.addEventListener("click", fin_orden);
boton_borrar = boton_borrar.addEventListener("click", borrarpedido);

//SECCIÓN DE FUNCIONES, ¡¡NO TOCAR SIN CONSULTAR A ARMANDO!!.

function imprimir_pedido()
{
    if(contador2 > 0)
    {
        modal_in3.innerHTML = contador2 + " Burrito...13$"
    }
    else
    {
        console.log("No hay burros en el pedido");
    }
    if(contador1 > 0)
    {
        modal_in.innerHTML = contador1 + " Hamburguesa...35$";
    }
    else
    {
        console.log("No hay hamburguesa en el pedido");
    }
}

function borrarpedido()
{
    total = 0;
    contador1 = 0;
    contador2 = 0;
}

function fin_orden()
{
    imprimir_pedido();
    console.log(total);
    modal_in2.innerHTML = "Total: " + total;
}

function picadillo(tipo)
{
    this.tipo = tipo;
}

function guisos(nombre,tipo)
{
    this.tipo = tipo;
    this.sabor = nombre;
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

//funcion que añade los burros, en esta tenemos que hacer los cambios que nos dijo Xochitl xd

function añadir2()
{
    var seleccion_gui = prompt("Seleccione el guiso del burro:  \n(1)Discada\n(2)Deshebrada\n(3)Chicharrón\n(4)Pollo al chipotle\n(5)Fajitas de pollo\n(6)Picadillo(mexicano,rojo o verde)");
    switch(seleccion_gui)
    {
        case "1":
            burro.tipo = discada;
            console.log("Se ha añadido al pedido un Burro");
            break;
        case "2":
            burro.tipo = deshebrada;
            console.log("Se ha añadido al pedido un Burro");
            break;
        case "3":
            burro.tipo = chicharron;
            console.log("Se ha añadido al pedido un Burro");
            break;
        case "4":
            burro.tipo = pollo_chi;
            console.log("Se ha añadido al pedido un Burro");
            break;
        case "5":
            burro.tipo = fajas_pollo;
            console.log("Se ha añadido al pedido un Burro");
            break;
        case "6":
            var seleccion_pica = prompt("Seleccione el tipo de picadillo: \n(1)Rojo\n(2)Verde\n(3)A la mexicana");
            switch (seleccion_pica)
            {
                case "1":
                    picadillo.tipo = "Rojo";
                    console.log("Se ha añadido al pedido un Burro");
                    break;
                case "2":
                    picadillo.tipo = "Verde";
                    console.log("Se ha añadido al pedido un Burro");
                    break;
                case "3":
                    picadillo.tipo = "A la mexicana";
                    console.log("Se ha añadido al pedido un Burro");
                    break;
                default:
                    alert("¡No se ha especificado el tipo de picadillo! por favor intente de nuevo.");
                    total = total - burro.precio;
            }
            break;
        default:
            alert("¡No se ha especificado el tipo de burro! por favor intente de nuevo.");
            total = total - burro.precio;
    }
    total = total + burro.precio;
    contador2 ++;
    pedido = pedido + "Burro";
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


