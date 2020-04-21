import React, {Component} from 'react';
import { Pager } from "react-bootstrap";
import {Link} from 'react-router-dom';

import "../../css/app.css";

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";

export default class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
      }
    
    handlePageChange(){number => {
        this.setState({ currentPage: number });
      };
    }
    
      getPagesNumbers(){ () => {
        const pageNumbers = [];
    
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
            <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
              {i}
            </Pager.Item>,
          );
        }
    
        return [...pageNumbers];
      };
    }
      render() {
        const pagesNumbers = this.getPagesNumbers();
    
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                     <Link  className={"navbar-brand"} to={"/"}>Nicolas Gretten <i class="fab fa-symfony"></i><i class="fab fa-react rotating"></i> Mon Portfolio</Link>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                     </button>
 
                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav mr-auto">
                         <li class="nav-item active">
                             <Link  className={"navbar-brand"} to={"/"}>Accueil <span class="sr-only">(current)</span></Link>
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
                         <li class="nav-item active">
                             <Link className={"nav-link"} to={"/presentation"}>Présentation du projet de stage</Link>
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
                <ReactPageScroller
                pageOnChange={this.handlePageChange}
                customPageNumber={this.state.currentPage}
                >
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent />
                <FifthComponent />
                </ReactPageScroller>
            </React.Fragment>
        );
      }
    }