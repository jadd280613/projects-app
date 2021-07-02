import React, {Fragment, useContext, useRef } from 'react';
import Tarea from './Tarea'

import ProyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {

    const nodeRef = useRef(null);

    //obtener el state de proyectos
    const proyectosContext = useContext(ProyectoContext);
    const {proyecto, eliminarProyecto} = proyectosContext;

     //obtener las tareas del proyecto
     const tareasContext = useContext(tareaContext);
     const { tareasproyecto } = tareasContext;

    // Si no hay un proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        : 
                            <TransitionGroup>
                                {tareasproyecto.map(tarea => (
                                    <CSSTransition
                                        nodeRef={nodeRef}
                                        key={tarea.id}
                                        timeout={200}
                                        className="tarea"
                                    >
                                        <Tarea 
                                            tarea={tarea}
                                        />
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTareas;