import React from 'react'

const DiretaFilho = (props) => {
    return (
        <div>
            <span>{props.nome} </span>
            <span>tem <strong>{props.idade}</strong> anos e </span>
            <span>{props.nerd ? 'é nerd!' : 'não é nerd!'}</span>
        </div>
    )

}

export default DiretaFilho