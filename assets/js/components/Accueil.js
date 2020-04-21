import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1
        }}
    />
);    
    
class Accueil extends Component {
    constructor() {
        super();
        
        this.state = { accueil: [], loading: true}
    }
    
    componentDidMount() {
        // this.getPosts();
    }
    
    getTopProject() {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
        //     const posts = res.data.slice(0,15);
        //     this.setState({ posts, loading: false })
        // })
    }
    
    render() {
        return (
           
        <div>
            <Nav />
            <div class="container mt-5">
                <div class="jumbotron  bg-light">
                    <h1 class="display-4">Bienvenue !</h1>
                    <p class="lead">J'ai créer ce portfolio pour vous présenter mes différents projets réaliser et en cours de réalisation. </p>
                    <hr class="my-4"/>
                    <p>Si vous souhaitez en apprendre plus sur moi cliquez sur ce bouton</p>
                    <p class="lead">
                        <Link  className={"btn btn-dark btn-lg"} to={"/cv"}>En apprendre plus</Link>
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card bg-light">
                            <div class="card-body elegant-color white-text rounded-bottom">
                            <h1 class="card-title">Avoizejotattoo.lu</h1>
                            <hr class="hr-light"/>
                                <div class="view overlay">
                                    <img src="/img/screen.png" class="card-img-top"/>
                                    <a>
                                    <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                                <p class="card-text white-text mt-5 mb-4">Lors de mon stage j'ai eu la chance de pouvoir réaliser le site internet pour le salon de tatouage Avoize & Jo Tatto Studio</p>
                                <a href="https://avoizejotattoo.lu" class="btn btn-dark btn-lg float-right">Direction le site !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-6">
                        <div class="card bg-light">
                            <div class="view overlay">
                                <iframe src="http://nicolas-gretten.fr:8081" frameborder="0" class="card-img-top" width="500" height="500"></iframe>
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title">Mon Wordpress</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">Voici un exemple d'installation Wordpress que j'ai effectué avec des plugins personnalisez !</p>
                                <a href="http://nicolas-gretten.fr:8081" class="btn btn-dark btn-lg float-right">Direction le site !</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                    <div class="card bg-light">
                            <div class="view overlay">
                                <iframe src="http://nicolas-gretten.fr:8082" frameborder="0" class="card-img-top" width="500" height="500"></iframe>
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title">Site E-commerce</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">Je vous présente la boutique réaliser lors de ma formation de développeur web et web mobile.</p>
                                <a href="http://nicolas-gretten.fr:8082" class="btn btn-dark btn-lg float-right">Direction le site !</a>
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
    
export default Accueil;