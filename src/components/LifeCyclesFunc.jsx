import React, { useEffect, useState } from 'react';


const LifeCyclesFunc = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Esteban",
        appellidos: "Albán Montesinos"
    }

    const [states, setStates] = useState(initialState);

    useEffect(() => {

        function tick () {
            setStates(states.edad + 1);
            return {
                ...states,
                fecha: new Date(),
                edad: states.edad
            }
        }
        
        const timerID = setInterval(() => {
            tick ();
        }, 1000);

        return () => {
            clearInterval (timerID);
        };
    }, [states]);

    return (
        <div>
            <h2>
                Hora Actual: 
                {initialState.fecha.toLocaleDateString()}
            </h2>
            <h3>{initialState.nombre} {initialState.appellidos}</h3>
            <h1>Edad: {initialState.edad}</h1>
        </div>
    )

}


export default LifeCyclesFunc;
