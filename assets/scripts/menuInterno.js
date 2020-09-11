function identificacionModulos(evento, obj){
    evento.preventDefault()
    let modulo = document.getElementById('modulos')
    modulo.innerText = obj.innerText
}