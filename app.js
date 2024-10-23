// Variables globales
let avion = document.getElementById("avion");
let velocidad = 10; // Velocidad inicial (media)
let movimiento;

// Función para mover el avión
function moverAvion() {
    // Obtener la posición actual del avión
    let posicionActual = parseInt(window.getComputedStyle(avion).left);
    
    // Mover el avión a la derecha según la velocidad
    avion.style.left = (posicionActual + velocidad) + "px";

    // Si el avión sale del borde derecho de la pantalla, lo regresamos al borde izquierdo
    if (posicionActual > window.innerWidth) {
        avion.style.left = "-150px"; // Posiciona el avión fuera de la pantalla por la izquierda
    }
}

// Función para arrancar el movimiento del avión
function arrancar() {
    if (!movimiento) {
        // Si no está en movimiento, iniciamos el intervalo
        movimiento = setInterval(moverAvion, 50); // Aproximadamente 60 FPS
    }
}

// Función para parar el movimiento del avión
function parar() {
    // Detener el intervalo si está en marcha
    clearInterval(movimiento);
    movimiento = null; // Reiniciar la variable para que se pueda arrancar de nuevo
}

// Función para cambiar la velocidad del avión
function cambiarVelocidad() {
    let selectorVelocidad = document.getElementById("velocidad");
    velocidad = parseInt(selectorVelocidad.value); // Actualiza la velocidad en función de la selección
}
