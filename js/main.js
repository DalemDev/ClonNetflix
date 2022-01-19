// funcion de suscribirse
document.getElementById('comenzar').addEventListener('click', () => {
    let correo = document.getElementById('correo')
    
    if(correo.value === ''){
        alert('Debe ingresar un correo')
    }else{
        let comenzar = document.getElementById('comenzar')
        let preload = document.getElementById('preload')
        comenzar.parentNode.removeChild(comenzar)      
        preload.classList.add('preloader')
    }
})