//Mostrando el nombre del usuario que esta jugando 
const mensajeNombre = localStorage.getItem('usuarios')
 
usuariosDivididos = mensajeNombre.split(',')

nomCompleto=usuariosDivididos[0].split(':')

apellidoCompleto=usuariosDivididos[1].split(':')

puntajeCompleto=usuariosDivididos[2].split(':')

nombreComillas=nomCompleto[1]

apellidoComillas=apellidoCompleto[1]

puntajeIncompleto=puntajeCompleto[1]

nombreUsuario=nombreComillas.slice(1,-1)

apellidoUsuario=apellidoComillas.slice(1,-1)

puntajeUsuario=puntajeIncompleto.slice(0,1)


console.log(puntajeUsuario)
puntajeReal=parseInt(puntajeUsuario, 10)


const mostrarNombre = document.getElementById('nombreJug').innerText = nombreUsuario + ' ' +apellidoUsuario;
const mostrarPuntaje = document.getElementById('puntajeUsuario').innerText = points;




//comenzamos a declarar las variables para sumarle los muntos al jugador 


const adivinaQuien = document.getElementById('adivinaQuien')

adivinaQuien.addEventListener('click',(e)=>{
    e.preventDefault() 

    const inputRespuesta = document.getElementById('respuesta').value;
    const descripcion = document.getElementById('descripcion').innerHTML;
    const puntaje = localStorage.getItem('usuarios')

    console.log(puntaje)
    console.log(inputRespuesta)
    console.log(descripcion)

    if((inputRespuesta=="carlos" || inputRespuesta=="carlos alvarez") && descripcion=="me gusta programar css "){
        alert("Respuesta correcta")

        puntajeReal=puntajeReal+1
        mostrarPuntaje = document.getElementById('puntajeUsuario').innerText = puntajeReal;
    }
    else if((inputRespuesta=="andrea" || inputRespuesta=="andrea gamboa") && descripcion=="soy muy buena en el javascript "){
        alert("Respuesta correcta")
    }
    else if((inputRespuesta=="camilo" || inputRespuesta=="camilo torres") && descripcion=="me gusta mucho el diseño grafico "){
        alert("Respuesta correcta")
    }
    else if((inputRespuesta=="juliana" || inputRespuesta=="juliana diaz") && descripcion=="se me facilita mucho el css "){
        alert("Respuesta correcta")
    }


})




