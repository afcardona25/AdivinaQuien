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


//mostrando ganador 
const mostrarNombre = document.getElementById('primerPuesto').innerText = nombreUsuario + apellidoUsuario;