var na = "Sin especificar";
var seleccion;
var seleccion_pica; 

var contador1 = 0;
var contador2 = 0;

var hamburguesa = new comida(na,35,"Hamburguesa");
var hamburguesa_pp = new comida(na, 38, "Hamburguesa con papas");
var burro = new comida(guisos, 13, "Burro de " + guisos.nombre);

var deshebrada = new guisos("Deshebrada", "normal");
var discada = new guisos("Discada", "normal");
var chicharron = new guisos("Chicharron", "normal");
var pollo_chi = new guisos("Pollo con chipotle", "normal");
var picadillo = new guisos("Picadillo: ", picadillo_tipo);
var fajas_pollo = new guisos("Fajitas de pollo", "normal");

var boton1_cancelar = document.getElementById("btn_1_cancel");
var boton2_cancelar = document.getElementById("btn_2_cancel");

var total = 0;
var boton1 = document.getElementById("btn_1");
var boton2 = document.getElementById("btn_2");
var boton_ordenar = document.getElementById("btn_ordenar");

boton1_cancelar = boton1_cancelar.addEventListener("click", cancelar1);

boton1 = boton1.addEventListener("click", añadir1);
boton2 = boton2.addEventListener("click", añadir2);
boton_ordenar = boton_ordenar.addEventListener("click", fin_orden);

function fin_orden()
{
    console.log(total);
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

function añadir2()
{
    var seleccion_gui = prompt("Seleccione el guiso del burro:  \n(1)Discada\n(2)Deshebrada\n(3)Chicharrón\n(4)Pollo al chipotle\n(5)Fajitas de pollo\n(6)Picadillo(mexicano,rojo o verde)");
    switch(seleccion_gui)
    {
        case "1":
            burro.tipo = discada;
            break;
        case "2":
            burro.tipo = deshebrada;
            break;
        case "3":
            burro.tipo = chicharron;
            break;
        case "4":
            burro.tipo = pollo_chi;
            break;
        case "5":
            var seleccion_pica = prompt("Seleccione el tipo de picadillo: \n(1)Rojo\n(2)Verde\n(3)A la mexicana");
            switch (seleccion_pica)
            {
                case "1":
                    burro.tipo = picadillo_tipo["Rojo"];
                    break;
                case "2":
                    burro.tipo = picadillo_tipo["Verde"];
                    break;
                case "3":
                    burro.tipo = picadillo_tipo["A la mexicana"];
                    break;
            }

            
        

    }
    console.log("Se ha añadido al pedido un Burro");
    total = total + burro.precio;
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


