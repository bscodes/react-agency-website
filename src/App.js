import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
            <ScrollToTop/>
            <Switch>
                <Route exact path = "/" component = {HomePage}/>
                <Route exact path = "/contact" component = {Contact}/>
                <Route exact path = "/services" component = {Services}/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
