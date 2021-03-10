// json
import data from '../../data.json';

import renderGeneralInfo from '../gen_info/gen_info.js';
import renderLang from '../lang/lang.js';

export default function renderContent() {
    const [one, two, three] = getProductOrder();
    const data1 = getProductData(one, data);
    const data2 = getProductData(two, data);
    const data3 = getProductData(three, data);
    const d = [data1, data2, data3]

    const container = document.querySelector("#content");
    container.innerHTML = `
        ${renderGeneralInfo(d)}
        ${renderLang(d)}
    `;
    
}

function getProductOrder() {
    const productOne = document.querySelector("#product-1");
    const productTwo = document.querySelector("#product-2");
    const productThree = document.querySelector("#product-3");
    const one = _.slice(productOne.childNodes[0].id, 5,).join('');
    const two = _.slice(productTwo.childNodes[0].id, 5,).join('');
    const three = _.slice(productThree.childNodes[0].id, 5,).join('');
    return [one, two, three];
}

function getProductData(name, data) {
    if (name == "tensorflow") {
        return data.tensorflow;
    } else if (name == "pytorch") {
        return data.pytorch;
    } else if (name == "mxnet") {
        return data.mxnet;
    } else {
        return;
    }
}

