import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import '../css/app.css';
import Home from './components/Home';
    
ReactDOM.render(<Router><Home/></Router>, document.getElementById('root'));
// ReactDOM.render(
//     <HashRouter>
//       <Switch>
//         <Redirect exact from="/" to="/accueil" />
//         <Route path="/cv" component={Cv} />
//         <Route path="/accueil" component={Accueil} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/projects" component={Projects} />
//       </Switch>
//     </HashRouter>
//     , document.getElementById('root')
//   );