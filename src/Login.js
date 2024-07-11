import React, { useState } from 'react';

function Login() {
    // Estado para manejar los datos del formulario de login
    const [credenciales, setCredenciales] = useState({
        usuario: '',
        contraseña: ''
    });

    // Función para manejar cambios en los inputs
    const handleChange = (e) => {
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para validar las credenciales
        console.log(credenciales);
        // Por ejemplo, puedes hacer una solicitud AJAX para validar el usuario y contraseña
        // y redirigir según el resultado
    };

    return (
        <div className="container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                {/* Usuario */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="usuario">Usuario:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="usuario" name="usuario" value={credenciales.usuario} onChange={handleChange} />
                    </div>
                </div>

                {/* Contraseña */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="contraseña">Contraseña:</label>
                    </div>
                    <div className="col-75">
                        <input type="password" id="contraseña" name="contraseña" value={credenciales.contraseña} onChange={handleChange} />
                    </div>
                </div>

                {/* Botón de Iniciar Sesión */}
                <div className="row">
                    <input className="boton_login" type="submit" value="Iniciar Sesión" />
                </div>
            </form>
        </div>
    );
}

export default Login;
