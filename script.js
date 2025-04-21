const btnNo = document.getElementById("btn-no");
const btnSi = document.getElementById("btn-si");
const mensajeGracias = document.getElementById("mensaje-gracias");

// Efecto del botón "No" que se escapa
btnNo.addEventListener("mouseover", () => {
  const randX = Math.floor(Math.random() * 550) - 150;
  const randY = Math.floor(Math.random() * 300) - 100;
  btnNo.style.transform = `translate(${randX}px, ${randY}px)`;
});

// Al hacer clic en "Sí", muestra el mensaje y registra la asistencia
btnSi.addEventListener("click", () => {
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre) {
    fetch(
      "https://script.google.com/macros/s/AKfycbyRYo9kDuTatRoRB1Gxo-sKiyxuDD0-IMxTKW1vka6XkjTxAmpgEKunr29mvA_gsV8oKw/exec",
      {
        method: "POST",
        body: new URLSearchParams({ nombre: nombre }),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        if (data === "OK") {
          mensajeGracias.classList.remove("oculto");
        } else {
          alert("Hubo un problema al registrar tu asistencia.");
        }
      });
  }
});
function iniciarCuentaRegresiva() {
  // Fecha exacta del cumple: martes 9 de abril de 2024 a las 20:30
  const fechaCumple = new Date("Abril 22, 2025 20:30:00").getTime();

  const countdown = document.getElementById("countdown");

  setInterval(() => {
    const ahora = new Date();
    const tiempoRestante = fechaCumple - ahora;

    if (tiempoRestante > 0) {
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
      const segundos = Math.floor((tiempoRestante / 1000) % 60);

      countdown.textContent = `Faltan ${dias} días, ${horas}h ${minutos}m ${segundos}s para la fiesta 🎉`;
    } else {
      countdown.textContent = "¡Ya comenzó la fiesta! 🎈";
    }
  }, 1000);
}

iniciarCuentaRegresiva();
