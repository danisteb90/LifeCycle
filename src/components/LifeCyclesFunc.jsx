import React, { useState, useEffect } from 'react';

const Clock = () => {

    const defaultState = {
        fecha: new Date(),
        edad: 32,
        nombre: "Martín",
        apellidos: "San José"
    };

    const [user, setUser] = useState(defaultState);

    useEffect(() => {
        const intervalAge = setInterval(() => {
            actualiceUser ();
        },5000)
        return () => {
            clearInterval(intervalAge);
        };
    });

    function actualiceUser () {
        return setUser ({
            fecha: user.fecha,
            edad: user.edad + 1,
            nombre: user.nombre,
            apellidos: user.apellidos
        })
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {user.fecha.toLocaleString()}
            </h2>
            <h2>Nombre: {user.nombre} {user.apellidos}</h2>
            <h3>Edad: {user.edad}</h3>
        </div>
    );
}

export default Clock;
