const section = document.querySelector("body > div:nth-child(3) .content");

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



const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      typeEffect();

    }

  });

});



observer.observe(section);

// Obtener el elemento del mensaje
const scrollMessage = document.getElementById('scrollMessage');

// Escuchar el evento de desplazamiento (scroll)
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Si el usuario se desplaza hacia abajo, ocultar el mensaje
        scrollMessage.classList.add('hidden');
    } else {
        // Si el usuario está en el tope de la página, mostrar el mensaje
        scrollMessage.classList.remove('hidden');
    }
});

const div = document.querySelector("body > div:nth-child(2)");

div.style.background = "url('https://i.ibb.co/dB8Zmwp/wtf.png')";

div.style.backgroundSize = "cover";



window.addEventListener('DOMContentLoaded', function() {

    var divElement = document.querySelector('body > div:nth-child(1)');

    divElement.style.backgroundImage = "url('https://i.ibb.co/GMH171b/img-s-Daje-PWn-HHUs9-FIP32u-OJb-SA-1.png')"; // Reemplaza 'ruta_de_la_imagen.jpg' con la ruta de tu imagen

    divElement.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen al contenedor, manteniendo la relación de aspecto

    divElement.style.backgroundRepeat = "no-repeat"; // Evita que la imagen se repita

  });
