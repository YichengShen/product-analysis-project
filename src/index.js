// bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
// const bootstrap = require('bootstrap')

// html
import './index.html'

// js modules
import renderIconHeader from './components/icon_header/icon_header.js'

renderMainPage()

function renderMainPage() {
    document.body.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto">
                ${renderIconHeader()}
            </div>
        </div>
    </div>
    `;
}