// 1. Buscar el botón por el ID
const boton = document.getElementById('btnNumero');

// 2. Definir el número y el mensaje
const numeroTelefono = "573207444929";
const mensaje = encodeURIComponent("Hola, vi tu página web y quiero contactarte");

// 3. Al hacer clic, redirigir a WhatsApp
boton.addEventListener('click', () => {
    window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
});

// 4. Copiar correo al portapapeles
function copiarEmail() {
    navigator.clipboard.writeText("sambonicruzsebastian11@gmail.com");
    alert("¡Correo copiado al portapapeles!");
}

