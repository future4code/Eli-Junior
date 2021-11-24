import React from 'react';
import './App.css';
import FotoPerfil from './components/img/foto-perfil.jpg';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Eli Garcia Tosta Junior" 
          descricao="Oi, eu sou Eli. Sou graduado em Direito e estou estudando programação full-stack na Labenu."
        />

        <CardPequeno 
          imagem="https://w7.pngwing.com/pngs/718/873/png-transparent-computer-icons-email-symbol-email-miscellaneous-angle-logo.png"
          dado="E-mail: "
          informacao="eli_gtj@hotmail.com"
        />

        <CardPequeno 
          imagem="https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-address-icon-isolated-on-abstract-background-png-image_1901952.jpg"
          dado="Endereço: "
          informacao="Rua das Flores, 820"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://projeto-cdn.infra.grancursosonline.com.br/tj-to-tribunal-de-justica-do-estado-do-tocantins.png" 
          nome="Tribunal de Justiça do Estado do Tocantins" 
          descricao="Fui residente jurídico no período de março de 2019 a dezembro de 2020, fazendo trabalhos de assessoria do magistrado." 
        />

<CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSdjwz50NlzvuLQbSuOBSWU7excVxZa-iQMAvoVMQ=s900-c-k-c0x00ffffff-no-rj" 
          nome="Ministério Público do Estado do Tocantins" 
          descricao="Fui estagiário, fazendo minutas de manifestações ministeriais. Aprendi também sobre como é o trabalho do Ministério Público dentro do âmbito jurídico." 
        />
        
        <CardGrande 
          imagem="https://clickpetroleoegas.com.br/wp-content/uploads/2021/04/materiais-da-construcao-civil.jpg" 
          nome="Constril Materiais de Construção" 
          descricao="Trabalhei como assistente administrativo: rotinas administrativas, pagamento de contas, organização de documentos para a contabilidade, etc." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png" 
          texto="LinkedIn" 
        />

        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://i0.wp.com/trucao.com.br/wp-content/uploads/2018/07/instagram-logo.png?fit=1200%2C1200&ssl=1" 
          texto="Instagram" 
        />      

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  
      </div>
    </div>
  );
}

export default App;
