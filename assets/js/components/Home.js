import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Cv from './Cv';
import Accueil from './Accueil';
import Contact from './Contact';
import Projects from './Projects';

class Home extends Component {
    render() {
        return (
        <Router>
           <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link  className={"navbar-brand"} to={"/accueil"}>Nicolas Gretten <i class="fab fa-symfony"></i><i class="fab fa-react rotating"></i> Mon Portfolio</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link  className={"navbar-brand"} to={"/accueil"}>Accueil <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link className={"nav-link"} to={"/projects"}>Mes projets</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className={"nav-link"} to={"/cv"}>CV</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className={"nav-link"} to={"/contact"}>Contact</Link>
                        </li>
                        </ul>
                        <div class="">
                        <a href="https://twitter.com/nico_great" target="_blank">
                            <i class="fab fa-twitter fa-2x mr-3 text-dark"></i>
                        </a>
                        <a href="https://github.com/Percevval" target="_blank">
                            <i class="fab fa-github fa-2x mr-3 text-dark"></i>
                        </a>
                        <a href="https://codepen.io/percevval" target="_blank">
                            <i class="fab fa-codepen fa-2x mr-3 text-dark"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" target="_blank">
                            <i class="fab fa-linkedin fa-2x mr-3 text-dark"></i>
                        </a>
                        </div>
                    </div>
                </nav>
                    <Switch>
                        {/* <Redirect exact from="/" to="/accueil" /> */}
                        {/* <Route path="/cv" component={Cv} />
                        <Route path="/accueil" component={Accueil} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/projects" component={Projects} /> */}
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
                    </Switch>
               
               <footer class="page-footer text-center font-small info-color-light mt-5 bg-light">
                    <div class="rgba-stylish-strong">
                        <div class="pb-4 pt-5">
                        <a href="https://twitter.com/nico_great" target="_blank">
                            <i class="fab fa-twitter mr-3 text-dark"></i>
                        </a>
                        <a href="https://github.com/Percevval" target="_blank">
                            <i class="fab fa-github mr-3 text-dark"></i>
                        </a>
                        <a href="https://codepen.io/percevval" target="_blank">
                            <i class="fab fa-codepen mr-3 text-dark"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" target="_blank">
                            <i class="fab fa-linkedin mr-3 text-dark"></i>
                        </a>
                        </div>
                        <div class="footer-copyright py-3">
                        <small>© 2020 - Réaliser par Nicolas Gretten</small>
                        
                        </div>
                    </div>
                </footer>
           </div>
        </Router>
        )
    }
}
    
export default Home;