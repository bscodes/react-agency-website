import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
            <Switch>
                <Route exact path = "/" component = {HomePage}/>
                <Route exact path = "/contact" component = {Contact}/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
