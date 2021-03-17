import './App.css'
import React from 'react'

import Card from './componentes/layout/Card'

import UsuarioInfo from './componentes/condicional/UsuarioInfo'
import ParOuImpar from './componentes/condicional/ParOuImpar'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametros from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from './componentes/basicos/Aleatorio'
import Familia from './componentes/basicos/Familia'
import FamiliaMembro from './componentes/basicos/FamiliaMembro'
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos'


export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos de React</h1>

            <div className="Cards">
                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                </Card>
                <Card titulo="#07 - Desafio Repetição" color="#0f6489">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 - Repetição" color="#00C8F8">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Ana"/>
                        <FamiliaMembro nome="Gustavo"/>
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametros
                        titulo="Situação do Aluno(a)"
                        aluno="Pedro"
                        nota={9.3}
                    />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#588783">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
