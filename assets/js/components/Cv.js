import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';

class Cv extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <Nav />
                    <div class="container mt-5">
                        <div class="row text-center">
                            <h1>Mon Cv</h1>
                            <img src="/img/Nicolas-gretten.png" class="border"/>
                        </div>
                    </div>
        )
                <Footer />
            </div>
            
        )
    }
}
export default Cv;