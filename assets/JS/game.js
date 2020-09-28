//creación de variables
let nombres = ["Alejandra Villamil", "Andres Cardona", "Carlos Alvarez", "Alejandro Fandiño"]
let respondidos = []
let input = document.getElementById("respuestaInput").value
let points = 0 
let textPista = {
    alejandra: "Soy Ingeniera de diseño y automatización electrónica, trabajo como ingeniera de soporte  y soy una  apasionada por la pastelería",
    andres: "Soy administrador de empresas y consultor para la gestión de crisis empresariales.  Me encanta cocinar y tocar guitarra",
    carlos: "Le gusta programar,  ama el css y ademas fue asesorado por el pony de los 7 colores.",
    alejandroF: "Soy una persona emprendedora, que adora los retos y no se rinde fácilmente. Matemático de profesión, detallista y autodidacta cada día, no dejo de aprender. Estoy interesado en las nuevas tecnologías y en las aplicaciones matemáticas en las distintas areas del conocimiento humano."
}
let buscarPista = ["alejandra","andres","carlos","alejandroF"]
let body = document.getElementsByTagName("body")
let posicion = 0



 //esta variable es solo para el random que obtiene la pista 
 //sobre el tecto. cada una de las posiciones del array 
 //corresponde con una key del array textPista



const saveInStorage = () => {
    const dataString = JSON.stringify(textPista)
        localStorage.setItem('reminingNames', dataString)
// esta funcion guarda los nombres y las pistas que no se han usado 
    

}
const savePoints = ()=>{
    const pointsString = JSON.stringify(points)
    localStorage.setItem('points', pointsString)
    //esta funcion guarda los puntos acumulados bajo el item de Local Storage points
}
function onloadProcess(){
    if (localStorage.getItem('reminingNames') == null) {
        console.log("start")
    } else {
        textPista = JSON.parse(localStorage.getItem("reminingNames"))
        points = JSON.parse(localStorage.getItem('points'))
    }
// esta funcion se ejecuta al cargar la pagina para volver a poner los nombres que ya se habian diligenciado y los puntos acumulados
}
body.onload = onloadProcess()

let pista = document.getElementById("obtenerPista")
pista.addEventListener('click', ()=>{
    //cuando se hace click en una el botón posa se obtiene  la pista en la primera posicion del array textPista
    saveInStorage(textPista)
    console.log("click en pista")
    document.getElementById("pista").classList.remove("d-none")
    document.getElementById("pista").innerHTML = textPista[buscarPista[0]]
})

for ( i = 0 ; i<4; i++){
    // este ciclo for es solo para verificar el correcto funcionamiento del script y que esté bien conectado al html
    console.log(nombres[i])
}

function matchRespuesta(){
    //primero se crea una variable donde se filtran los nombres que corrspondan con el input del campo de respuesta
   let n = nombres.includes(input)

   //Se evalua esta variable con un if. si el valor es verdadero se procede a sumar untos y verificar a qué nombre corresponde para diligenciarlo corectamente
   //ademas se procede a eliminar ese nombre del array textPista
    if(n === true){
        
        swal("Bien", "Atinaste", "success")
        points += 1
        savePoints()
        console.log(`Tiene ${points} puntos`)
        switch(input){
            case "Alejandra Villamil":
                posicion = 0
                document.getElementById('answer'+posicion).innerText = input
                buscarPista.splice(0,1)
                console.log(buscarPista)
                
               delete buscarPista[0]
                
                
                break;
            case "Andres Cardona":
                posicion = 1
                document.getElementById('answer' + posicion).innerText = input
                buscarPista.splice(1, 1)
                console.log(buscarPista)
                
                delete buscarPista[1]
                
                
                break;
            case "Carlos Alvarez":
                posicion = 2
                document.getElementById('answer' + posicion).innerText = input
                buscarPista.splice(2, 1)
                console.log(buscarPista)
               
                delete buscarPista[2]

                
                break;
            case "Alejandro Fandiño":
                posicion = 3
                document.getElementById('answer' + posicion).innerText = input
                buscarPista.splice()
                console.log(buscarPista)
                
                delete buscarPista[3]
                
                break;
        }
        filledInfo = {
            nombre: input,
            posicion: posicion
        }
        saveInStorage()
        saveInStorageFilledData(filledInfo)
        mostrarPuntaje = document.getElementById('puntajeUsuario').innerText = points
        
    } else{
        points -=1
        savePoints()
        console.log(`Tiene ${points} puntos`)
        swal("Error!", "Sigue intentando", "error")
        
    }
    
}
let respuesta = document.getElementById("respuestaBtn")
respuesta.addEventListener('click', ()=>{
    input = document.getElementById("respuestaInput").value
    if (input.length!= 0){
        document.getElementById("respuestaInput").value = ""
        console.log(`EL input de respuesta es "${input}"`)
        matchRespuesta()
        document.getElementById("pista").classList.add("d-none")
    } else {
        swal("Error!", "El input está vacío", "error");
    }
    
})
const saveInStorageFilledData = (filledInfo) => {
    if (localStorage.getItem('nombres') == null) {
        respondidos.push(filledInfo)
        const nombresString = JSON.stringify(respondidos)
        localStorage.setItem('nombres', nombresString)
    } else {
        listInStorage = JSON.parse(localStorage.getItem("nombres"))
        listInStorage.push(filledInfo)
        const nombresString = JSON.stringify(listInStorage)
        localStorage.setItem('nombres', nombresString)
    }
}
const answersStored = () => {
    const namesInStorage = JSON.parse(localStorage.getItem('nombres'))
    
    for (let i = 0; i < namesInStorage.length; i += 1) {
        document.getElementById('answer' + namesInStorage[i].posicion).innerText = namesInStorage[i].nombre
        
    }
}
answersStored()
function checkWin(){
    let aleja = document.getElementById("answer0").innerText
    let andresC = document.getElementById("answer1").innerText
    let charly = document.getElementById("answer2").innerText
    let alejo = document.getElementById("answer3").innerText
    if (points == 4) {
        swal("ganaste", "felicitaciones", "success")
        points = 0 
        savePoints()
        respondidos = []
        saveInStorageFilledData()
    } else if (aleja != "" && andresC != ""&& charly != "" && alejo != null ){
        swal("Terminante", "aunque no lograste el máximo puntaje felicitaciones", "success")
        location.replace("../pages/podium.html")
    } 

}
checkWin()



