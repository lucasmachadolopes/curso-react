import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDom.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametros
            titulo="Situação do Aluno(a)"
            aluno="Pedro" nota={9.3}
        />
        <ComParametros
            titulo="Situação do Aluno(a)"
            aluno="Maria" nota={9.9}
        />
        <Fragmento></Fragmento>
    </div>,
    document.getElementById('root')
)