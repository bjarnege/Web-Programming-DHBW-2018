import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import cocktailsFinden from "./components/cocktailsFinden/cocktails_finden";
import cocktailsAnzeigen from "./components/cocktailsAnzeigen/cocktails_anzeigen";
import Rezepte from "./components/Rezepte/rezepte";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/cocktailsAnzeigen" component={cocktailsAnzeigen}/>
              <Route path="/Rezepte" component={Rezepte}/>
              <Route path="/" component={cocktailsFinden}/>
              <Redirect from="/" to="/"/>
              <Route render={()=><h1>Diese Seite konnte nicht gefunden werden!</h1>}/>
          </Switch>

      </BrowserRouter>
  );
}

export default App;
