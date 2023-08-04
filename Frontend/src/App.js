
import './App.css';

import {Switch, Link, Route} from 'react-router-dom';
import FeatherIcon from "feather-icons-react";

import Cotacao_detalhes from "./componentes/country/detalhes_efectuadas"

function App() {
  
  return (
    <div className="App">
      <div className="header">
      <Link to="/request"></Link>
        <div className="perfil_join">
          <div style={{cursor:"pointer"}} ><FeatherIcon icon="user" size="40" stroke-width="1px" width="40" stroke-linecap="round"  /></div>
          <div style={{fontSize:'9px'}}>HMahesse</div>
        </div>
       
      </div>
      <div className="aside menu_basico">
        <ul>
          <li> <a> <Link to="/"><FeatherIcon icon="home" size="16" stroke-width="1px"/> Home </Link></a></li>
        </ul>
      </div>
      <div className="conteudo">
        <Switch>
            <Route exact path="/" component={Cotacao_detalhes}/> 
            
        </Switch>
      </div>
      <div className="footer">&copy; copyright  Helio Mahesse </div>
    </div>
  );
}

export default App;
