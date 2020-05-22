import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

class Projects extends React.Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
			show: false,
		};
        this.state = { 
            sites: [],
            games:[],
            designs: []
        };
    }

    handleClose() {
		this.setState({ show: id });
	}

	handleShow(id) {
		this.setState({ show: id });
	}
    
    componentDidMount() {
        this.getSites();
        this.getGames();
        this.getDesigns();
        
    }
    
    getSites() {
       axios.get(`./index.php/api/sites`).then(res => {
           const sites = res.data;
           this.setState({ sites: sites})
       })
    }
    getGames() {
        axios.get(`./index.php/api/games`).then(res => {
            const games = res.data;
            this.setState({ games: games})
        })
    }
    getDesigns() {
        axios.get(`./index.php/api/designs`).then(res => {
            const designs = res.data;
            this.setState({ designs: designs})
        })
    }
    

    
    render() {
        return (
        <div>
            <Nav />
            
           <div class="container mt-5 pt-5 pb-5">
                <div class="col p-0">
                    <div class="h1" ><FontAwesomeIcon icon={['fab', 'firefox']}/> Les Sites</div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                { this.state.sites.map(site=>
                    <div class="col-12 col-lg-4 mb-5" id={"card-sites-" + ( site.index) }>
                        <div class="card bg-light">
                            <div class="view overlay">
                                <img src={ site.image } class="card-img-top" id={"img-sites-"+ ( site.index )}
                                onMouseOver={e => (e.currentTarget.src = site.gif)}
                                onMouseOut={e => (e.currentTarget.src = site.image)}
                                />
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title"><FontAwesomeIcon icon={[site.brand,site.icon]}/> { site.name }</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">{ site.desc }</p>
                                <a href={ site.link } class="btn btn-primary btn-lg float-right">Direction le site !</a>
                            </div>
                        </div>
                    </div>
                )}
                </div>   
            </div>
            <div class="container pt-5 pb-5">
                <div class="col p-0">
                    <div class="h1"><FontAwesomeIcon icon={['fab', 'js-square']}/> Les Jeux</div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                { this.state.games.map(game=>
                    <div class="col-12 col-lg-4 mb-5">
                        <div class="card bg-light">
                            <div class="view overlay">
                                <img src={ game.image } class="card-img-top"/>
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title"><FontAwesomeIcon icon={ game.brand, game.icon }/> { game.name }</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">{ game.desc }</p>
                                <Button variant="primary" onClick={this.handleShow(game.name)} className="btn-md float-left">
                                    Aperçus du jeu !
                                </Button>
                                <Button variant="warning" onClick={this.handleShow} className="btn-md float-right">
                                    Accéder au jeu
                                </Button>
                                {/* <a href="" class="btn btn-primary btn-md float-left" data-toggle="modal" data-target={"#modalGame"+(game.index) }>Aperçus du jeu !</a>
                                <a href={ game.link } class="btn btn-warning btn-md float-right">Accéder au jeu</a> */}
                                
                            </div>
                        </div>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{ game.name }</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><iframe class="embed-responsive-item" width="400" height="600" src={ game.link }></iframe></Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        {/* <div class="modal fade w-100 h-100" id={"modalGame"+ (game.index) } tabindex="-1" role="dialog" aria-labelledby={"modalMaquettage"+ (game.index )} aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">{ game.name }</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body text-center">
                                        <iframe class="embed-responsive-item" width="400" height="600" src={ game.link }></iframe>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    )}
                </div>  
            </div>
            <div class="container pt-5 pb-5">
                <div class="col p-0">
                    <div class="h1"><FontAwesomeIcon icon={['fab', 'adobe']}/> Maquettage</div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                { this.state.designs.map(design=>
                    <div class="col-12 col-lg-4 mb-5">
                        <div class="card bg-light">
                            <div class="view overlay">
                                <img src={ design.image } class="card-img-top"/>
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title"><FontAwesomeIcon icon={ design.brand, design.icon }/> { design.name }</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">{ design.desc }</p>
                                <button type="button" class="btn btn-primary btn-lg float-right" data-toggle="modal" data-target={"#modalMaquettage"+(design.index) }>Voir le maquettage !</button>
                            </div>
                        </div>
                        <div class="modal fade" id={"modalMaquettage"+ (design.index) } tabindex="-1" role="dialog" aria-labelledby={"modalMaquettage"+ (design.index )} aria-hidden="true">
                            <div class={"modal-dialog "+(design.size)} role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">{ design.name }</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        { design.content.map((value, index) =>{
                                            return <img src={ value } class="w-100 img-responsive mt-4 mb-4 border"></img>
                                           
                                        }) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>  
            </div>
            <Footer />
        </div>
        )
    }
}
    
export default Projects;