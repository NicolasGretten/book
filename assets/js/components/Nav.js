import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect, Link, NavLink} from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                     <Link  className={"navbar-brand"} to={"/"}>Nicolas Gretten <i class="fab fa-symfony" title="Symfony"></i> <i class="fab fa-react rotating" title="React"></i> Portfolio | </Link>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                     </button>
 
                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav mr-auto">
                         <li class="nav-item">
                             <NavLink  className={"nav-link"} exact to={"/"} title="Accueil">Accueil</NavLink>
                         </li>
                         <li class="nav-item">
                             <NavLink className={"nav-link"} exact to={"/projects"} title="Projets">Projets</NavLink>
                         </li>
                         
                         <li class="nav-item">
                             <NavLink  className={"nav-link"} exact to={"/contact"} title="Contact">Contact</NavLink>
                         </li>
                         <li class="nav-item">
                             <NavLink className={"nav-link"} exact to={"/presentation"} title="Présentation du projet de stage">Présentation du projet de stage</NavLink>
                         </li>
                         <li class="nav-item">
                             <NavLink className={"nav-link"} exact to={"/cv"} title="Cv">Cv</NavLink>
                         </li>
                         </ul>
                         <div class="">
                         <a href="https://twitter.com/nico_great" target="_blank" title="Twitter">
                             <i class="fab fa-twitter fa-2x mr-3 text-dark"></i>
                         </a>
                         <a href="https://github.com/Percevval" target="_blank" title="GitHub">
                             <i class="fab fa-github fa-2x mr-3 text-dark"></i>
                         </a>
                         <a href="https://codepen.io/percevval" target="_blank" title="Codepen">
                             <i class="fab fa-codepen fa-2x mr-3 text-dark"></i>
                         </a>
                         <a href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" target="_blank" title="Linkedin">
                             <i class="fab fa-linkedin fa-2x mr-3 text-dark"></i>
                         </a>
                         </div>
                     </div>
                 </nav>
                
        )
    }
}