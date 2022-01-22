import React from 'react';

export default class AreaDeAdmin extends React.Component {
  state = {
    valorNome: "",
    valorEmail: ""
  }

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ valorEmail: event.target.value })
  }

  render() {
    return (
        <div>
            <h1>Login</h1>
            <Form>
              <input name={'nome'} onChange={this.onChangeNome} value={this.state.valorNome} />
              <input name={'e-mail'} onChange={this.onChangeEmail} value={this.state.valorEmail} />
            </Form>
            <button>Voltar</button>
            <button>Entrar</button>
        </div>
    );
  }
}

