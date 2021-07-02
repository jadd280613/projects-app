import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id:1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1},
            {id:2, nombre: 'Elegir colores', estado: true, proyectoId: 2},
            {id:3, nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3},
            {id:4, nombre: 'Elegir hosting', estado: true, proyectoId: 4},
            {id:5, nombre: 'Elegir plataforma', estado: false, proyectoId: 3},
            {id:6, nombre: 'Elegir colores', estado: true, proyectoId: 4},
            {id:7, nombre: 'Elegir plataforma de pago', estado: true, proyectoId: 1},
            {id:8, nombre: 'Elegir hosting', estado: false, proyectoId: 2}
        ],
        tareasproyecto: null,
        errortarea: null,
        tareaseleccionada: null,
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    // crear las funciones

    //obtener las tareas deun proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    //Valida y muestra un erro en caso de que sea necesario
    const validarTarea = tarea => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    //eliminar tarea
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    //cambiar estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    //extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    //edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    //elimina la tareaseleciconada
    const limpiarTarea = tarea => {
        dispatch({
            type: LIMPIAR_TAREA,
        })
    }

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;