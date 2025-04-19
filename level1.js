const accionesPorPunto = {
    patio: () => {
        window.location.href = 'patio.html';
    },
    auto: () => {
        window.location.href = 'auto.html';
    },
    living: () => {
        window.location.href = 'living.html';
    },
    comedor: () => {
        window.location.href = 'comedor.html';
    },
    cosina: () => {
        window.location.href = 'cosina.html';
    },
    bano: () => {
        window.location.href = 'bano.html';
    },
    logia: () => {
        window.location.href = 'logia.html';
    },
    delante: () => {
        window.location.href = 'delante.html';
    }

};

document.querySelectorAll('.point').forEach(point => {
    point.addEventListener('click', () => {
        const id = point.dataset.id;
        if (accionesPorPunto[id]) {
            accionesPorPunto[id](); // Ejecuta la acción correspondiente
        }
        point.style.display = 'none'; // Opcional: desaparece el punto después
    });
});