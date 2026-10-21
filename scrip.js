const entradaBusqueda = document.getElementById('entrada-busqueda');
const botonBuscar = document.getElementById('boton-buscar');
const resultadoBusqueda = document.getElementById('resultado-busqueda');

const baseTramites = {
    'credencial': 'tramite-identificacion',
    'ine': 'tramite-identificacion',
    'identificacion': 'tramite-identificacion',
    'curp': 'tramite-curp',
    'clave': 'tramite-curp',
    'pasaporte': 'tramite-pasaporte',
    'viaje': 'tramite-pasaporte'
};

function buscarTramite() {
    const termino = entradaBusqueda.value.trim().toLowerCase();
    if (!termino) {
        resultadoBusqueda.textContent = 'Por favor escribe un término de búsqueda.';
        resultadoBusqueda.style.color = '#D9534F';
        return;
    }

    let idEncontrado = null;
    for (const [palabraClave, idSeccion] of Object.entries(baseTramites)) {
        if (termino.includes(palabraClave)) {
            idEncontrado = idSeccion;
            break;
        }
    }

    if (idEncontrado) {
        resultadoBusqueda.textContent = '✅ Trámite encontrado — desplázate hacia abajo para verlo.';
        resultadoBusqueda.style.color = '#28A745';
        document.getElementById(idEncontrado).scrollIntoView({ behavior: 'smooth' });
        document.getElementById(idEncontrado).style.backgroundColor = '#E6FFE6';
        setTimeout(() => {
            document.getElementById(idEncontrado).style.backgroundColor = '';
        }, 2500);
    } else {
        resultadoBusqueda.textContent = '❌ No se encontró el trámite. Intenta con: INE, CURP o Pasaporte.';
        resultadoBusqueda.style.color = '#D9534F';
    }
}

botonBuscar.addEventListener('click', buscarTramite);
entradaBusqueda.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') buscarTramite();
});