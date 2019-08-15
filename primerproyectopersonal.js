var b = document.getElementById("extraer");
b.addEventListener("click", precioDelProducto);
var resultado = document.getElementById("resultado");
var t = document.getElementById("precio");



function precioDelProducto(){

    precio = parseInt(t.value);

if(precio){
    resultado.innerHTML += "Este es el precio por producto :" + precio+ "<br />";
}
 
}




var c = document.getElementById("igual");
c.addEventListener("click", dineroDelCliente);
var result = document.getElementById("result");
var e = document.getElementById("dinero");


function dineroDelCliente(){

    dinero = parseInt(e.value);


    if(dinero){

     

    result.innerHTML = "Este es el dinero entregado por el cliente : " + dinero  + "<br />";
    }
}

var d = document.getElementById("vueltas");
var resultadito = document.getElementById("resultadito");
d.addEventListener("click", devueltas);

function devueltas(){
 
    if(precio == dinero){

        resultadito.innerHTML = "papi todo copas"  + "<br />";
    }
     else if(precio < dinero) {

            vueltas = dinero - precio ;
        

        resultadito.innerHTML =  "Estan son tus devueltas : " + vueltas + "<br />";
    }
    else if(precio > dinero){

        resultadito.innerHTML = "El efectivo del cliente es menor al solicitado"  + "<br />";
    }

}