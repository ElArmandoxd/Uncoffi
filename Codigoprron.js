var pedido;
var total;

var boton1;
var boton2;
var boton3;
var botonf;
var nombre;

var hamburguesa = 35;
var refresco = 15;
var desayuno = 37;
var total = 0;
var desayuno_comp = 0;
var chilaquiles;
var guiso;
var huevo;

boton2 = document.getElementById("btn2");
boton1 = document.getElementById("btn1");
boton3 = document.getElementById("btn3");
botonf = document.getElementById("orden_final");
botoncancel = document.getElementById("cancelar");
nombre = document.getElementById("usuario");

boton1.addEventListener("click", añadir);
boton2.addEventListener("click", añadir2);
boton3.addEventListener("click", añadir3);
botonf.addEventListener("click", final);
botoncancel.addEventListener("click", cancel);
nombre.addEventListener("change", nombre_us);


function nombre_us()
{
    console.log("Que onda" + nombre);
}
function añadir()
{
    console.log("Se ha añadido al pedido una Hamburguesa");
    total = total + hamburguesa;
}
function añadir2()
{
    console.log("Se ha añadido al pedido un Refresco");
    total = total + refresco;
}
function añadir3()
{
    console.log("Se ha añadido al pedido un desayuno");
    total = total + desayuno;
    desayuno_comp = 1;

    chilaquiles = prompt("¿Chilaquiles rojos(1) o verdes(2)? (Pulsa 0 si es un pedido sin chilaquiles)");
    huevo = prompt("Huevos c/: \n Salchicha(1) \n Jamón(2) \n Chorizo(3) \n Estrellado(4) \nPedido sin huevo(0) ");
    guiso = prompt("¿Que guiso quieres? \n Discada(1) \n Picadillo Rojo(2)/Verde(3) \n Deshebrada(4) \n Chicharrón(5) \n Pedido sin guiso(0)");
    
    switch(chilaquiles)
    {
        case "0":
            chilaquiles = "Pedido sin chilaquiles";
            break;
        case "1":
            chilaquiles = "Rojos";
            break;
        case "2":
            chilaquiles = "Verdes";
            break;
        default:
            alert("No se han especificado chilaquiles, vuelva a realizar su pedido.");
            total = total - desayuno;
            break;
    }
    switch(huevo)
    {
        case "0":
            huevo = "Pedido sin huevo"
            break;
        case "1": 
            huevo = "Con salsicha";
            break;
        case "2":
            huevo = "Con jamón";
            break;
        case "3":
            huevo = "Con chorizo";
            break;
        case "4":
            huevo = "Estrellado";
            break;
        default:
            alert("No se ha registrado ningun pedido, intente de nuevo");
            total = total - desayuno;
            break;
    }
    switch(guiso)
    {
        case "0":
            guiso = "Pedido sin guiso";
            break;
        case "1":
            guiso = "Discada";
            break;
        case "2":
            guiso = "Picadillo rojo";
            break;
        case "3":
            guiso = "Picadillo verde";
            break;
        case "4":
            guiso = "Deshebrada";
            break;
        case "5":
            guiso = "Chicharron";
            break;
        default:
            alert("No se ha registrado una opción, por favor intente de nuevo");
            total = total - desayuno;
            break;    
    }
}
function final()
{
    if(total <= 0)
    {
        alert("No se ha realizado ningun pedido");
    }
    else
    {
        if(desayuno_comp == 1)
        {
            alert("Se ha pedido 1 desayuno completo con: \nChilaquiles " + chilaquiles +"\n" + guiso + "\n" + "huevos " + huevo);
            alert("Son: " + total + "$");
            console.clear();
        }
        else
        {
            alert("Son: " + total + "$");
        }
        
    }
}
function cancel()
{
    total = 0;
    console.clear();  
    chilaquiles = 0;
    huevo = 0;
    guiso = 0;
    desayuno_comp = 0;
}