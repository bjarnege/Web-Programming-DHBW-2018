import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import CocktailsFinden from "./components/cocktailsFinden/cocktailFinden";
import CocktailsAnzeigen from "./components/cocktailsAnzeigen/cocktailsAnzeigen";
import Rezepte from "./components/Rezepte/rezepte";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          {/* Routing initialisiert */}
          <Switch>
              <Route path="/cocktailsAnzeigen" component={CocktailsAnzeigen}/>
              <Route path="/Rezepte" component={Rezepte}/>
              <Route path="/" component={CocktailsFinden}/>
              <Redirect from="/" to="/"/>
              <Route render={()=><h1>Diese Seite konnte nicht gefunden werden!</h1>}/>
          </Switch>

      </BrowserRouter>
  );
}

export default App;
