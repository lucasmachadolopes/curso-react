import './App.css'
import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametros from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'


export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos de React</h1>

            <div className="Cards">
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parâmetro" color ="#E8B71A">
                    <ComParametros
                        titulo="Situação do Aluno(a)"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color ="#588783">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
