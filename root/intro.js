const textElement = document.getElementById("text");

const texts = [
    "¡Hola Tamara, bienvenida a esta aventura de la busqueda de los huevos de pascua, a continuación te explicaré como iniciar tu busqueda...",
    "Aquí aprenderás sobre criaturas extraordinarias.",
    "Algunos Pokémon viven en el agua, otros en la tierra.",
    "¡Prepárate para comenzar tu aventura!"
];

let textIndex = 0;
let charIndex = 0;
let isTyping = false;
let typingInterval;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        isTyping = true;
    } else {
        clearInterval(typingInterval);
        isTyping = false;
    }
}

function startTyping() {
    textElement.textContent = "";
    charIndex = 0;
    typingInterval = setInterval(typeWriter, 50);
}

document.querySelector(".textbox").addEventListener("click", () => {
    if (isTyping) {
        // Termina el texto inmediatamente si aún se está escribiendo
        clearInterval(typingInterval);
        textElement.textContent = texts[textIndex];
        isTyping = false;
    } else {
        // Pasa al siguiente texto o termina
        textIndex++;
        if (textIndex < texts.length) {
            startTyping();
        } else {
            window.location.href = 'level1.html';
        }
    }
});

window.onload = startTyping;
