import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
    
class Contact extends Component {
    constructor() {
        super();
        // this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        // this.getUsers();
    }
    
    getUsers() {
    //    axios.get(`http://localhost:8000/api/users`).then(users => {
    //        this.setState({ users: users.data, loading: false})
    //    })
    }
    
    render() {
        return(
        <div>
            <Nav />
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="jumbotron jumbotron-fluid m-auto p-4">
                        <div class="container">
                            <h1 class="display-4 text-center text-dark pt-5"><strong>Mes réseaux</strong></h1>
                            <div class="container mt-5">
                                <div class="row">
                                    <a class="col ml-5" href="https://twitter.com/nico_great"><i class="fab fa-twitter fa-5x"></i></a>
                                    <a class="col ml-5" href="https://github.com/Percevval"><i class="fab fa-github fa-5x"></i></a>
                                    <a class="col ml-5" href="https://codepen.io/percevval"><i class="fab fa-codepen fa-5x"></i></a>
                                    <a class="col ml-5" href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/"><i class="fab fa-linkedin fa-5x"></i></a>
                                </div>
                            </div>
                            <h1 class="display-4 mt-5 text-center text-dark pt-5 "><strong>Me contacter</strong></h1>
                            <div class="container mt-5 pb-5">
                                <div class="row text-center">
                                    <div class="col"><i class="fas fa-mobile-alt fa-5x"></i></div>
                                    <div class="col ml-5"><i class="fas fa-at fa-5x"></i></div>
                                    <div class="col ml-5"><i class="fab fa-discord fa-5x"></i></div>
                                </div>
                                <div class="row text-center mt-5">
                                    <div class="col h4"><strong>(+33) 06-07-23-96-37</strong></div>
                                    <div class="col ml-5 h4">
                                        <strong>
                                            ngretten@gmail.com
                                            <a href="mailto:ngretten@gmail.com"><button class="btn-sm btn-outline-dark mt-3">Me contacter</button></a>
                                        </strong>
                                    </div>
                                    <div class="col ml-5 h4"><strong>𝕻𝖊𝖗𝖈𝖊𝖛𝖛𝖆𝖑 (nicolas)#2323</strong></div>
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