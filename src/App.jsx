import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default function App () {
    return(
        <div id="app">
        <h1>Fundamentos de React (Arrow)</h1>
        <Aleatorio min={1} max = {60}></Aleatorio>
        <Fragmento />
        <Primeiro></Primeiro>
        <ComParametros
            titulo="Situação do Aluno(a)"
            aluno="Pedro"
            nota={9.3}
        />
        <Primeiro></Primeiro>

    </div>
    )
}
