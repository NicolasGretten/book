import React, {Component} from 'react';
export default class Footer extends Component {
    render() {
        return (
                <footer class="page-footer text-center font-small info-color-light bg-light">
                    <div class="rgba-stylish-strong">
                        <div class="pb-4 pt-5">
                        <a href="https://twitter.com/nico_great" target="_blank" title="Twitter">
                            <i class="fab fa-twitter mr-3 text-dark"></i>
                        </a>
                        <a href="https://github.com/Percevval" target="_blank" title="GitHub">
                            <i class="fab fa-github mr-3 text-dark"></i>
                        </a>
                        <a href="https://codepen.io/percevval" target="_blank" title="Codepen">
                            <i class="fab fa-codepen mr-3 text-dark"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nicolas-gretten-9b8650163/" target="_blank" title="Linkedin">
                            <i class="fab fa-linkedin mr-3 text-dark"></i>
                        </a>
                        </div>
                        <div class="footer-copyright py-3">
                        <small>© 2020 - Réaliser par Nicolas Gretten</small>
                        
                        </div>
                    </div>
                </footer>
                
        )
    }
}