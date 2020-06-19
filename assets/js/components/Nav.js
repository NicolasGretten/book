import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect, Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Nav extends Component {
    render() {
        return (
                 <nav class="navbar navbar-expand-lg navbar-light bg-light">
                     <Link  className={"navbar-brand"} to={"/"}>Nicolas Gretten <FontAwesomeIcon icon={['fab', 'symfony']} title="Symfony"/> <FontAwesomeIcon icon={['fab', 'react']} className='rotating' title="React"/> Portfolio | </Link>
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
                             <NavLink className={"nav-link"} exact to={"/cv"} title="Cv">Cv</NavLink>
                         </li>
                         <li class="nav-item">
                             <NavLink className={"nav-link"} exact to={"/lettremotivation"} title="Présentation du projet de stage">Lettre de motivation</NavLink>
                         </li>
                         </ul>
                         <div class="">
                         <a href="https://twitter.com/nico_great" target="_blank" title="Twitter">
                             <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' className='mr-3 text-dark'/>
                         </a>
                         <a href="https://github.com/Percevval" target="_blank" title="GitHub">
                             <FontAwesomeIcon icon={['fab', 'github']} size='2x' className='mr-3 text-dark'/>
                         </a>
                         <a href="https://codepen.io/percevval" target="_blank" title="Codepen">
                             <FontAwesomeIcon icon={['fab', 'codepen']} size='2x' className='mr-3 text-dark'/>
                         </a>
                         <a href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" target="_blank" title="Linkedin">
                             <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' className='mr-3 text-dark'/>
                         </a>
                         </div>
                     </div>
                 </nav>
                
        )
    }
}