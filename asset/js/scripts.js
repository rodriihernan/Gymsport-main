document.getElementById('reservar-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const clase = document.getElementById('clase').value;
    const hora = document.getElementById('hora').value;

    // Aquí puedes enviar los datos al servidor para procesar la reserva
    document.getElementById('mensaje-reserva').innerText = `Reservaste ${clase} a las ${hora}.`;
});

// Simulación de datos de reservas
const reservas = [
    { clase: 'Gimnasio', hora: '09:00', estado: 'Confirmada' },
    { clase: 'Crossfit', hora: '10:00', estado: 'Confirmada' }
];

const tablaReservas = document.getElementById('tabla-reservas');
reservas.forEach(reserva => {
    const row = `<tr>
        <td>${reserva.clase}</td>
        <td>${reserva.hora}</td>
        <td>${reserva.estado}</td>
    </tr>`;
    tablaReservas.innerHTML += row;
});

document.getElementById('datos-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const dni = document.getElementById('dni').value;
    const correo = document.getElementById('correo').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    // Aquí puedes enviar los datos al servidor para actualizar la información
    alert('Datos actualizados correctamente.');
});
