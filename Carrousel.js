let imagenes =["carrusel1.png",
               "carrusel2.png",
               "carrusel3.png",
               "carrusel4.png"];

let cont=0;


function anterior() {
    let imagen = document.getElementById("card"); 
    if(cont>0){
        cont--;
        
    }else{
        cont = imagenes.length-1;
    }

    imagen.src= `url('./ilustraciones/${imagenes[cont]}')`;
}
function posterior() {
    let imagen = document.getElementById("card");
    if (cont < imagenes.length - 1) {
        cont++;
    } else {
        cont = 0;
    }
    imagen.src = `./ilustraciones/${imagenes[cont]}`;
}