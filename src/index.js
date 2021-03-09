// bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
// const bootstrap = require('bootstrap')

const _ = require('lodash');

// html
import './index.html'

// json
import data from './data.json';

// js modules
import renderIconHeader from './components/icon_header/icon_header.js'
import renderDragDropArea, {addDragDrop} from './components/drag_drop/drag_drop.js'

renderMainPage(data);

function renderMainPage(data) {
    document.body.innerHTML = `

        ${renderIconHeader()}
        ${renderDragDropArea()}

    `;
    addDragDrop();
}