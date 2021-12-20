import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './components/ListaPlaylists';
import './components/CriarPlaylist';
import './components/AddMusica';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: orange;
    height: 100vh;
`

class App extends React.Component {
  state = {
    mostraPlaylists: false,
    playlists: []
  }

  componentDidMount() {
    this.buscarPlaylists()
  }

  mudarCondicionalDeLista = () => {
    this.state.mostraPlaylists ? this.setState({mostraPlaylists: false}) : this.setState({mostraPlaylists: true})
  }

  buscarPlaylists = () => {
    let url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    let autorizacao = {
      headers: {
        authorization: "eli-junior-joy"
      }
    }

    axios.get(url, autorizacao)
    .then((response) => {
      this.setState({playlists: response.data.result.list})}
    )}
    .catch((error) {
        alert("Houve um problema. Tente novamente.");
    )}
    console.log(error)

  render(){

    let mostraLista = <h1>Página de erro</h1>
    if (this.state.mostraPlaylists){
      mostraLista = <
      ListaPlaylists playlists = {this.state.playlists}
      buscarPlaylists = {this.buscarPlaylists} 
      />
    } else {
      mostraLista = ""
    }

    return (
      <Container>
        <CriarPlaylist buscarPlaylists = {this.buscarPlaylists} />
        <br/><br/>
        <button onClick={this.mudarCondicionalDeLista}>Mostrar/Esconder Playlists</button>
        {mostraLista}
      </Container>
    );
  }  
}

export default App;
