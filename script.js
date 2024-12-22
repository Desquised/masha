// Selección del mensaje "Desplázate hacia abajo"
const scrollMessage = document.getElementById('scrollMessage');

// Detectar el evento de desplazamiento (scroll) y ocultar/mostrar el mensaje
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Si el usuario se desplaza hacia abajo, ocultar el mensaje
        scrollMessage.classList.add('hidden');
    } else {
        // Si el usuario está en el tope de la página, mostrar el mensaje
        scrollMessage.classList.remove('hidden');
    }
});

// Selección de la sección para el efecto de escritura
const section = document.querySelector("body > div:nth-child(3) .content");

// Crear un nuevo párrafo para el efecto de máquina de escribir
const typewriter = document.createElement("p");
typewriter.style.position = "absolute";
typewriter.style.right = "-245px";
typewriter.style.top = "60%";
typewriter.style.transform = "translateY(-50%)";
typewriter.style.whiteSpace = "pre-wrap";
typewriter.style.overflow = "hidden";
typewriter.style.textAlign = "right";
typewriter.style.direction = "rtl";
section.appendChild(typewriter);

const text = '"Los ChatBots son la esperanza\n de un mundo conectado en\n época de adversidad."';

function typeEffect() {
  typewriter.textContent = "";
  let index = 0;

  function typeCharacter() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;

      if (typewriter.textContent.endsWith("Mundo")) {
        typewriter.innerHTML += "<br>";
      }

      setTimeout(typeCharacter, 100);
    }
  }

  typeCharacter();
}

// Usamos IntersectionObserver para detectar cuando la sección entra en vista
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeEffect();
    }
  });
});

observer.observe(section);

// Manipulación de fondos para las secciones
const div = document.querySelector("body > div:nth-child(2)");
div.style.background = "url('https://i.ibb.co/dB8Zmwp/wtf.png')";
div.style.backgroundSize = "cover";

// Configuración de fondo para la primera sección
window.addEventListener('DOMContentLoaded', function() {
  var divElement = document.querySelector('body > div:nth-child(1)');
  divElement.style.backgroundImage = "url('https://i.ibb.co/GMH171b/img-s-Daje-PWn-HHUs9-FIP32u-OJb-SA-1.png')";
  divElement.style.backgroundSize = "cover";
  divElement.style.backgroundRepeat = "no-repeat";
});
