const modal = document.getElementById("modal-cita");
const botonAbrir = document.getElementById("abrir-cita");

botonAbrir.addEventListener("click", function () {
    modal.style.display = "flex";
});

const botonCerrar = document.getElementById("cerrar-modal");

botonCerrar.addEventListener("click", function () {
    modal.style.display = "none";
});
const formulario = document.getElementById("formulario-cita");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const telefono = document.getElementById("telefono").value;

    const mensaje =
        `Hola, soy ${nombre}. Quiero solicitar una cita para ${servicio} el ${fecha} a las ${hora}. Mi teléfono es ${telefono}.`;

    const numeroTaller = "34600000000";

    const url =
        `https://wa.me/${numeroTaller}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

});
const campoFecha = document.getElementById("fecha");

const hoy = new Date();
const año = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, "0");
const dia = String(hoy.getDate()).padStart(2, "0");

const fechaMinima = `${año}-${mes}-${dia}`;

campoFecha.min = fechaMinima;
const botonMenu = document.getElementById("menu-hamburguesa");
const menuNav = document.getElementById("menu-nav");

botonMenu.addEventListener("click", function () {
    menuNav.classList.toggle("menu-abierto");
});