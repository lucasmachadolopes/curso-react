import React from 'react'

const DiretaFilho = (props) => {
    const cb = props.quandoClicar
    const idadeMin = 50
    const idadeMax = 70
    const gerarIdade = () => parseInt(Math.random() * (idadeMax - idadeMin)) + idadeMin
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )

}

export default DiretaFilho