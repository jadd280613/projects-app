import React, { useContext, useEffect, useRef  } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoProyectos = () => {

    const nodeRef = useRef(null);
    
    //estraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;
    
    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos(); 
        //eslint-disable-next-line
    }, [])

    //revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;


    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
            {
                proyectos.map(proyecto => (
                    <CSSTransition
                        nodeRef={nodeRef}
                        key={proyecto.id}
                        timeout="200"
                        className="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))
            }
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;