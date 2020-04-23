import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Cv from './Cv';
import Accueil from './Accueil';
import Contact from './Contact';
import Projects from './Projects';
import Presentation from './Presentation';

class Home extends Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route exact path="/accueil">
                    <Accueil />
                </Route>
                <Route exact path="/cv">
                    <Cv />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/presentation">
                    <Presentation />
                </Route>
            </Switch>
        </Router>
        )
    }
}
    
export default Home;