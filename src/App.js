import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import PortfolioDetail from './pages/PortfolioDetail';
import Works from './pages/Works';
import OurTeam from './pages/OurTeam';
import './App.scss';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <HashRouter basename="/">
                            <ScrollToTop/>
                            <Navbar/>
                            <Switch>
                                
                                <Route exact path = "/" component = {HomePage}/>
                                <Route exact path = "/contact" component = {Contact}/>
                                <Route exact path = "/services" component = {Services}/>
                                <Route exact path = "/works" component = {Works}/>
                                <Route exact path = {'/works/:id'} component = {PortfolioDetail}/>
                                <Route exact path = {'/team'} component = {OurTeam}/>
                                
                            </Switch>
                            <Footer/>
                    </HashRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
