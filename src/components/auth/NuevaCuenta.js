import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const NuevaCuenta = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        nombre: '',
        password: '',
        confirmar: ''
    });

    //extraer de usuario
    const {email, nombre, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        
        //validar que no haya campos vacios

        //password minimo de 6 caracteres

        //los 2 password que sean iguales

        //pasarlo al action 

    }



    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener cuenta</h1>
                <form
                    onSubmit={onSubmit} 
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesion
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;