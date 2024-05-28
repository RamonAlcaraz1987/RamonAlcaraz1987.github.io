let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let ltaerrores = document.getElementById("ltaerrores");
let ltamensajes = document.getElementById("ltamensajes");
let posicion = document.getElementsByName("Posicion");
let imagen = document.getElementById("card");
let imagenes =["ilustraciones/base.png",
                "ilustraciones/escolta.png",
                "ilustraciones/alero.png",
                "ilustraciones/alapivot.png",
                "ilustraciones/center.png"];

function validacion(){

 ltaerrores.innerHTML = "";
 ltamensajes.innerHTML = "";
 let posicionseleccionada = null;
 let cont = 0;
 let errores= [];
 let exp_tel = /^[1-9]\d{9}$/;
 let exp_no_numeros = /^[a-zA-Z\s]+$/;
 let exp_mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 let apellido = lname.value.trim();
 let nombre = fname.value.trim();
 let telefono = tel.value.trim();
 let mail = email.value.trim();
 for (let i = 0; i < posicion.length; i++) {
    if (posicion[i].checked) {
        posicionseleccionada = posicion[i].value;
        imagen.src= imagenes[posicionseleccionada];
        
      
    }
}

if (!posicionseleccionada) {
    errores.push("Falta seleccionar la posición");
    
}
 if(nombre.length == 0){
    errores.push("falta el nombre");


  } else if(nombre.length > 30){

        errores.push("Nombre muy largo (mas de 30 caracteres");

    }else if(!exp_no_numeros.test(nombre))
        {
            errores.push("el Nombre no debe contener numeros");


        };
        
 if(apellido.length == 0){
        errores.push("falta el apellido");
    
  } else if(apellido.length > 30){
    
            errores.push("Apellido muy largo (mas de 30 caracteres)");
    
     }else if(!exp_no_numeros.test(apellido))
        {
            errores.push("el Apellido no debe contener numeros");


        };
        
 if(telefono.length == 0){
      errores.push("falta el telefono");
        
    }else if(telefono.length > 10){
    
        errores.push("telefono muy largo ( mas de 10 caracteres");

        }else if(!exp_tel.test(telefono))
         {
        
            errores.push("10 digitos no debe empezar con 0");


         };
 if(mail.length == 0){
        errores.push("falta el mail");
              
    }else if(mail.length > 30){
          
        errores.push("email muy largo ( mas de 30 caracteres");
      
        }else if(!exp_mail.test(mail))
            {
              
             errores.push("mail invalido");
      
      
             };

 for (let err of errores)
    {
        let li = document.createElement("li")
        li.innerHTML = err;
        ltaerrores.appendChild(li);

     }
if(errores.length == 0)
    {
        let li = document.createElement("li");
        let posicicionmostrada = parseInt(posicionseleccionada) + 1;
        li.innerHTML = `Hola ${nombre} ${apellido}, tu número de teléfono es: ${telefono} y tu email es: ${mail} tu posicicion favorita es ${posicicionmostrada}
        a continuacion te mostraremos un jugador leyenda en tu posicion: `;
        ltamensajes.appendChild(li);

        document.forms[0].reset();
    }
else{


    imagen.src="ilustraciones/incio.png";
}
 


return false;







}