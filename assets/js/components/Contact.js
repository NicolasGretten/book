import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    
class Contact extends Component {
    render() {
        return(
        <div>
            <Nav />
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="jumbotron jumbotron-fluid m-auto p-4">
                        <div class="container">
                            <h1 class="display-4 text-center text-dark pt-5"><strong>Mes réseaux</strong></h1>
                            <div class="container">
                                <div class="row">
                                    <a class="col ml-5 mt-5" href="https://twitter.com/nico_great" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} size='5x'/></a>
                                    <a class="col ml-5 mt-5" href="https://github.com/Percevval" title="GitHub"><FontAwesomeIcon icon={['fab', 'github']} size='5x'/></a>
                                    <a class="col ml-5 mt-5" href="https://codepen.io/percevval" title="Codepen"><FontAwesomeIcon icon={['fab', 'codepen']} size='5x'/></a>
                                    <a class="col ml-5 mt-5" href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" title="Linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} size='5x'/></a>
                                </div>
                            </div>
                            <h1 class="display-4 mt-5 text-center text-dark pt-5 "><strong>Me contacter</strong></h1>
                            <div class="container mt-5">
                                <div class="row text-center">
                                    <div class="col-12 col-lg-4 mt-5" title="Numéro de téléphone portable"><FontAwesomeIcon icon={['fas', 'mobile-alt']} size='5x'/><p class="mt-5 h4"><strong>(+33) 06-07-23-96-37</strong></p></div>
                                    <div class="col-12 col-lg-4 mt-5" title="Adresse e-mail"><FontAwesomeIcon icon={['fas', 'at']} size='5x'/><p class="mt-5 h4"><strong>
                                            ngretten@gmail.com
                                            <p><a href="mailto:ngretten@gmail.com"><button class="btn-sm btn-outline-dark mt-3">Me contacter</button></a></p>
                                        </strong></p></div>
                                    <div class="col-12 col-lg-4 mt-5" title="Pseudo Discord"><FontAwesomeIcon icon={['fab', 'discord']} size='5x'/><p class="mt-5 h4"><strong>𝕻𝖊𝖗𝖈𝖊𝖛𝖛𝖆𝖑 (nicolas)#2323</strong></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
       </div>
        )
    }
}
export default Contact;