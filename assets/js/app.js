import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/app.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas, faWordpress)
    
ReactDOM.render(<Router><Home/></Router>, document.getElementById('root'));