import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


class Cv extends React.Component {
    
    render() {
        return(
            <div>
                <Nav />
                    <div class="container mt-4 mb-4">
                        <div class="col text-center mb-5">
                            <h1>Mon Cv</h1>
                        </div>
                        <div class="col text-center">
                            <Zoom>
                                <img
                                    alt="Cv Nicolas Gretten 2020"
                                    src='/img/Nicolas-gretten.png'
                                    width="500"
                                    className= 'img'
                                />
                            </Zoom>
                        </div>
                    </div>
                <Footer />
            </div>
            
        )
    }
}
export default Cv;