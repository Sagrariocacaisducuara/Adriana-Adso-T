function seleccioner(link){
    let links = document.querySelectorAll("Haders nav a");

    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";
    links[4].className = "";
    links[5].className = "";

links.className = "selected";
}

function validarFormularioContacto() {
    var nombre1 = document.getElementById("nombre1").value;
    var apellido1 = document.getElementById("apellido1").value;
    var correo1 = document.getElementById("correo1").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre1 === "" || apellido1 === "" || correo1 === "" || mensaje === "") {
        alert("Por favor, complete todos los campos del formulario de contacto.");
        return false;
    }
    alert('Formulario validado con éxito. ¡Gracias!');
}


document.getElementById('inicio-form').addEventListener('submit', function(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var contr = document.getElementById('contr').value;

    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu usuario.');
        return;
    }
    if (contr.trim() === '') {
        alert('Por favor, ingresa tu contraseña.');
        return;
    }

    alert('Formulario validado con éxito. ¡Gracias por iniciar sesión!');
});

/*function validarFormularioRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var aceptarCondiciones = document.getElementById("aceptarCondiciones").checked;

    if (nombre === "" || apellido === "" || correo === "") {
        alert("Por favor, complete todos los campos del formulario de registro.");
        return false;
    }

    if (!aceptarCondiciones) {
        alert("Debe aceptar las condiciones para registrarse.");
        return false;
    }

    // Puedes agregar más validaciones según tus necesidades

    return true;
}*/



