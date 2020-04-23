import React, {Component} from 'react';
import {HashRouter, Router, Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Cv from './Cv';
import Accueil from './Accueil';
import Contact from './Contact';
import Projects from './Projects';
import Presentation from './Presentation';

class Home extends Component {
    render() {
        return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route path="/accueil">
                    <Accueil />
                </Route>
                <Route path="/cv">
                    <Cv />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/presentation">
                    <Presentation />
                </Route>
            </Switch>
        </HashRouter>
        )
    }
}
    
export default Home;