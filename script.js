const scrollMessage = document.getElementById('scrollMessage');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollMessage.classList.add('hidden');
    } else {
        scrollMessage.classList.remove('hidden');
    }
});

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

const div = document.querySelector("body > div:nth-child(2)");
div.style.background = "url('https://i.ibb.co/9hSD1zW/58180f94-b3ff-47b8-873b-74dd99d353c5.webp')";
div.style.backgroundSize = "cover";

window.addEventListener('DOMContentLoaded', function() {
  var divElement = document.querySelector('body > div:nth-child(1)');
  divElement.style.backgroundImage = "url('https://i.ibb.co/9ZvkXgz/mashaaa.webp')";
  divElement.style.backgroundSize = "cover";
  divElement.style.backgroundRepeat = "no-repeat";
});
