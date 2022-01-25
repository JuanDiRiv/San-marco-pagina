window.addEventListener('load', function(){

    let cerrar = document.querySelectorAll('.close')[0];
    let abrir = document.querySelectorAll('.cta')[0];
    let modal = document.querySelectorAll('.modal')[0];
    let modalC = document.querySelectorAll('.modal-container')[0];
    const formulario =  this.document.forms[0];
    let inputUsuario = document.querySelector("#usuario");
    let inputContrasenia = document.querySelector("#password");
    
    abrir.addEventListener('click', function(e) {
        e.preventDefault();
        modalC.style.opacity ="1"
        modalC.style.visibility = "visible"
        modal.classList.toggle("modal-close")
    });
    
    cerrar.addEventListener('click', function(e) {
        e.preventDefault();
            modal.classList.toggle("modal-close")
            modalC.style.opacity ="0"
            modalC.style.visibility = "hidden"
    
    
       
    })
    
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let usuario = inputUsuario.value;
        let contrasenia = inputContrasenia.value;
    
        if(usuario == "admin" && contrasenia == "admin"){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: true,
                timer: 1500
              })
              location.href = '../descarga.html';
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Usuario o contraseña incorrecta',
                    showConfirmButton: true,
                    timer: 1500
                })
    
            }
            formulario.reset();
    })
    });