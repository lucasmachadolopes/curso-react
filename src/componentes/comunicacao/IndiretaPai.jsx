import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = (props) => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

        console.log(nome, idade, nerd)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>tem <strong>{idade}</strong> anos e </span>
                <span>{nerd ? 'é nerd!' : 'não é nerd!'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

export default IndiretaPai