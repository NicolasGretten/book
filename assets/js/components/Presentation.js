import React, {Component} from 'react';
// import { Pager } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "../../css/app.css";

import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import FifthComponent from "./FifthComponent";
import SixComponent from "./SixComponent";
import SevenComponent from "./SevenComponent";
import EightComponent from "./EightComponent";
import NineComponent from "./NineComponent";
import TenComponent from "./TenComponent";
import ElevenComponent from "./ElevenComponent";
import TwelveComponent from "./TwelveComponent";

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
                 <div class="container-fluid fixed-bottom mb-4">
                    <div class="d-flex flex-row-reverse">
                      <Link className={'offset-col-2 btn btn-danger'} title="Accueil" to="/"><FontAwesomeIcon icon={['fas', 'home']}/></Link>
                    </div>
                 </div>
                <ReactPageScroller
                pageOnChange={this.handlePageChange}
                customPageNumber={this.state.currentPage}
                >
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent />
                <FifthComponent />
                <SixComponent />
                <SevenComponent />
                <EightComponent />
                <NineComponent />
                <TenComponent />
                <ElevenComponent />
                <TwelveComponent />
                </ReactPageScroller>
            </React.Fragment>
        );
      }
    }