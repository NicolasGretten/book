import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';


class Projects extends React.Component {
    constructor() {
        super();
        this.state = { 
            sites: [],
            games:[],
            designs: []
        };
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
                    <div class="h1" ><i class="fab fa-firefox"></i> Les Sites</div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                { this.state.sites.map(site=>
                    <div class="col-4" id={"card-sites-" + ( site.index) }>
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
                                <h4 class="card-title"><i class={ site.icon }></i> { site.name }</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">{ site.desc }</p>
                                <a href={ site.link } class="btn btn-primary btn-lg float-right">Direction le site !</a>
                            </div>
                        </div>
                    </div>
                )}
                </div>   
            </div>
            <div class="container mt-5 pt-5 pb-5">
                <div class="col p-0">
                    <div class="h1"><i class="fab fa-js-square"></i> Les Jeux</div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                { this.state.games.map(game=>
                    <div class="col-4">
                        <div class="card bg-light">
                            <div class="view overlay">
                                <img src={ game.image } class="card-img-top"/>
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title"><i class={ game.icon }></i> { game.name }</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">{ game.desc }</p>
                                <a href="#" class="btn btn-primary btn-md float-left" data-toggle="modal" data-target={"#modalGame"+(game.index) }>Aperçus du jeu !</a>
                                <a href={ game.link } class="btn btn-warning btn-md float-right">Accéder au jeu</a>
                                
                            </div>
                        </div>
                        <div class="modal fade w-100 h-100" id={"modalGame"+ (game.index) } tabindex="-1" role="dialog" aria-labelledby={"modalMaquettage"+ (game.index )} aria-hidden="true">
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
                        </div>
                    </div>
                    )}
                </div>  
            </div>
            <div class="container mt-5 pt-5 pb-5">
                <div class="col p-0">
                    <div class="h1"><i class="fab fa-adobe"></i> Maquettage</div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                { this.state.designs.map(design=>
                    <div class="col-4">
                        <div class="card bg-light">
                            <div class="view overlay">
                                <img src={ design.image } class="card-img-top"/>
                                <a>
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body elegant-color white-text rounded-bottom">
                                <h4 class="card-title"><i class={ design.icon }></i> { design.name }</h4>
                                <hr class="hr-light"/>
                                <p class="card-text white-text mb-4">{ design.desc }</p>
                                <a href={ design.link } class="btn btn-primary btn-lg float-right" data-toggle="modal" data-target={"#modalMaquettage"+(design.index) }>Voir le maquettage !</a>
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