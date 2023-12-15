{
    
    console.log("hola mundo")
    
    let tarea = document.getElementById("tarea")
    let boton = document.getElementById("botonAd")

    boton.addEventListener("click", anadir)

    function anadir() {
        
        // alert es igual que el console.log
        alert(tarea.value)
    }

}