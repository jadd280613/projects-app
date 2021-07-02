import React, { useContext, useState, useEffect } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { v4 as uuidv4 } from 'uuid';
const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto} = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //effect que detecta si hay una tarea seleciconada
    useEffect(()=> {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])

    // state el formulario
    const [tarea, guardarTarea] = useState({
        nombre: '',
    })

    //extraer el nombre del proyecto
    const {nombre} = tarea;

    // Si no hay un proyecto seleccionado
    if(!proyecto) return null;

    //array destructuring para extrae el proyecto actual
    const [proyectoActual] = proyecto;


    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        
        //validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        // si es edicion o si es nueva tarea
        if (tareaseleccionada === null) {
            //agregar la nueva tarea al state de tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false
            tarea.id = uuidv4();
            agregarTarea(tarea);
        }else {
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina tareaseleccionada del state
            limpiarTarea()
        }

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }


    return (
        <div className="formulario">
            <form
            onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea ..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {
                errortarea 
                        ? <p className="menaje error">El nobre de la tarea es obligatorio</p> 
                        : null
            }
        </div>
    );
}
 
export default FormTarea;