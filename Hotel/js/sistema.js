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

document.getElementById('registro-form').addEventListener('submit', function(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    var aceptarCondiciones = document.getElementById('aceptarCondiciones').checked;

    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre');
        return;
    }
    if (!/^\S+.\S+\@\S+$/.test(correo)) {
        alert('Ingresa un correo electrónico válido');
        return;
    }
    alert('Formulario validado con éxito. ¡Gracias por registrarte!');
});

document.getElementById('inicio-form').addEventListener('submit', function(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('contr').value;

    if (nombre.trim() === '') {
        alert('Por favor, un usuario');
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(contr)) {
        alert('ds');
        return;
    }
    alert('Formulario validado con éxito. ¡Gracias por registrarte!');
});