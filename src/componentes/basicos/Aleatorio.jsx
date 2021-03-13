import React from 'react'

const Aleatorio = (props) => {
    const { min, max } = props;

    const randomBetween = parseInt(Math.random() * (max - min) + min)
    return (
        <>
            <h1>Valor Aleatório</h1>
            <strong>{randomBetween} </strong>
            é um número aleatório entre
            <strong> {props.min} </strong>
            e
            <strong> {props.max}</strong>
        </>
    )
}

export default Aleatorio