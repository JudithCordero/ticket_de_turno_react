import React, { useState } from 'react';

function FormularioTicket() {
    // Estado para manejar los datos del formulario
    const [formulario, setFormulario] = useState({
        nombre_completo: '',
        curp: '',
        nombre: '',
        paterno: '',
        materno: '',
        telefono: '',
        celular: '',
        correo: '',
        nivel: 'primaria',
        municipio: 'municipio1',
        asunto: 'asunto1'
    });

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar o procesar los datos del formulario
        console.log(formulario);
    };

    return (
        <div className="container">
            <h1>Ticket de Turno</h1>
            <p>Complete el formulario para generar su ticket</p>
            <form onSubmit={handleSubmit}>
                {/* Nombre completo */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="nombre_completo">Nombre completo de quien realizará el trámite:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="nombre_completo" name="nombre_completo" value={formulario.nombre_completo} onChange={handleChange} />
                    </div>
                </div>

                {/* CURP */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="curp">CURP:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="curp" name="curp" value={formulario.curp} onChange={handleChange} />
                    </div>
                </div>

                {/* Otros campos similares */}
                {/* ... */}

                {/* Botón de Generar Ticket */}
                <div className="row">
                    <input className="boton_ticket" type="submit" value="Generar Ticket" />
                </div>
            </form>
        </div>
    );
}

export default FormularioTicket;
