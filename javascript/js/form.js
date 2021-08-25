const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const pass = document.getElementById("pass")
const form = document.getElementById("formulario")
const alerta = document.getElementById("warnings")

    form.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        alerta.innerHTML = ""
        if(nombre.value.length < 6) {
            warnings += 'El nombre es invalido <br>'
            entrar = true
        }
       
        if(regexEmail.test(correo.value)) {
            
            warnings += 'El email es invalido <br>'
            entrar = true
        }
        if(pass.value.length < 8) {
            warnings += 'La contraseña es invalida <br>'
        }
        if(entrar) {
            alerta.innerHTML = warnings
        }else{
            alerta.innerHTML = "Enviado"
        }
    
    })