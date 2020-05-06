import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Footer extends Component {
    render() {
        return (
                <footer class="page-footer text-center font-small info-color-light bg-light">
                    <div class="rgba-stylish-strong">
                        <div class="pb-4 pt-5">
                        <a href="https://twitter.com/nico_great" target="_blank" title="Twitter">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' className='mr-3 text-dark'/>
                        </a>
                        <a href="https://github.com/Percevval" target="_blank" title="GitHub">
                            <FontAwesomeIcon icon={['fab', 'github']} size='2x' className='mr-3 text-dark'/>
                        </a>
                        <a href="https://codepen.io/percevval" target="_blank" title="Codepen">
                            <FontAwesomeIcon icon={['fab', 'codepen']} size='2x' className='mr-3 text-dark'/>
                        </a>
                        <a href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" target="_blank" title="Linkedin">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' className='mr-3 text-dark'/>
                        </a>
                        </div>
                        <div class="footer-copyright py-3">
                        <small>© 2020 - Réalisé par Nicolas Gretten</small>
                        
                        </div>
                    </div>
                </footer>
                
        )
    }
}