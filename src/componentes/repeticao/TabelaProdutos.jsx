import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

const ListaAlunos = (props) => {
    let cabecalhosTabela = <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Preço</th>
    </tr>
    const itensTabela = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    {cabecalhosTabela}
                </thead>
                <tbody>
                    {itensTabela}
                </tbody>
            </table>
        </div>
    )
}

export default ListaAlunos