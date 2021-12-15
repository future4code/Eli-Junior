import React from "react";

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir Para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"} 
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder={"E-mail"} 
                    value={this.state.email}
                    onChange={this.handleEmail}    
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}