// images
import mxnetIconUrl from './mxnet_icon.png'
import tensorflowIconUrl from './tensorflow_icon.png'
import pytorchIconUrl from './pytorch_icon.png'

// custom styles
import './icon_header.css'

export default function renderIconHeader() {
    return `
    <header class="header-icon">
        <div class="overflow-hidden">
        <div class="row gx-1">
            <div class="col my-auto">
                <img class="icon-tensorflow mx-auto d-block" src=${tensorflowIconUrl} alt="tensorflow_icon">
            </div>
            <div class="col my-auto">
                <img class="icon-pytorch mx-auto d-block" src=${pytorchIconUrl} alt="pytorch_icon">
            </div>
            <div class="col my-auto">
                <img class="icon-mxnet mx-auto d-block" src=${mxnetIconUrl} alt="mxnet_icon">
            </div>
        </div>
        </div>
    </header>
    `
}