let nombre, correo, mensaje;
let formulario = document .getElementById('form');

formulario.addEventlistener('submit', (e)=>{
    e.preventdefault() 
    Leerdatos()
})


function Leerdatos() {
    nombre = document.getElementById('nombre').value 
correo = document.getElementById('correo').vale
mensaje = document.querySelector('#textarea').vale 
}

function validarData(nombre,correo,mensaje) {
    if(|nombre.legth==0 || correo.legth==0 || mensaje.legth==0) {

        swal.fire({
            title: 'Error',
            text: 'do you want to continue',
            icon: 'error'
            confirmButtontext: 'cool',
            iconcolor: 'purple'

    
        })
    }
}
 


