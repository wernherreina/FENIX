function validarFormulario(evento){
    evento.preventDefault()
    const inputUser = document.getElementById('user')
    const inputPsw = document.getElementById('psw')

    if (inputUser.value != '' && inputPsw.value != '') {
        swal("Muy bien", "Información correcta", "success")
        setTimeout(() => {
            window.location = './gestion.html'
        }, 2000)
    } else {
        swal("error", "Hay campos sin diligenciar", "error")
    }
}