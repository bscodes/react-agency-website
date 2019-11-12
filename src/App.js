import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
            <Switch>
                <Route exact path = "/" component = {HomePage}/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
