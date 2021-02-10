import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListarClientesComponent from "./components/ListarClientesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CrearClienteComponent from "./components/CrearClienteComponent";
import VerClienteComponent from "./components/VerClienteComponent";

function App() {
  return (
   <div>
     <Router>
       <HeaderComponent/>
         <div className="container">
           <Switch>
             <Route path="/" exact component={ListarClientesComponent}/>
             <Route path="/clientes" component={ListarClientesComponent}/>
             <Route path="/add-cliente/:id" component={CrearClienteComponent}/>
             <Route path="/view-cliente/:id" component={VerClienteComponent}/>
           </Switch>
         </div>
         <FooterComponent/>
     </Router>
   </div>
  );
}

export default App;
