document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const backgroundMusic = document.getElementById('background-music');

    // Reproducir música de fondo
    

    // Redirigir a la página del juego al hacer clic en el botón
    startButton.addEventListener('click', () => {
        backgroundMusic.play().catch(error => {
            console.error('Error al reproducir la música:', error);
        });
        window.location.href = 'intro.html';
    });
});
