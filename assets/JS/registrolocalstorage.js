const formularioRegistro = document.getElementById('formularioRegistro')
// console.log(formularioRegistro)

listaDeUsuarios=[];

formularioRegistro.addEventListener('submit',(e)=>{
    e.preventDefault()

    const inputNombre = document.getElementById('name').value;
    const inputApellido = document.getElementById('lastName').value;
    let puntos = 0;
    
    /* declaracion de variables para validad los campos*/
    const alertaNombre=document.getElementById('validName')
    const alertaApellido=document.getElementById('validLastName')

    /* condicionales para validar los campos vacios */
    if(inputNombre == ''){
        alertaNombre.innerHTML = "Está vacio rellene el campo"
    }
    if(inputApellido == ''){
        alertaApellido.innerHTML = "Está vacio rellene el campo"
    }
    
    if(inputNombre != '' && inputApellido !=''){
    
    const usuario = {
        nombre: inputNombre,
        apellido: inputApellido,
        puntos: puntos,
    }
   // alert("Se registro!")

    guardarEnLocalStorage(usuario)

    swal("Felicitaciones!", "Te has registrado correctamente", "success")
     
    window.location.assign("../pages/game.html")
 
    }
})

const guardarEnLocalStorage = (usuario)=>{
    if(localStorage.getItem('usuarios')==null){
        listaDeUsuarios.push(usuario)
        const usuarioString = JSON.stringify(listaDeUsuarios)
        localStorage.setItem('usuarios', usuarioString)
    }else{
        listaEnStorage=JSON.parse(localStorage.getItem('usuarios'))
        listaEnStorage.push(usuario)
        const usuarioString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuarioString)
    }
}