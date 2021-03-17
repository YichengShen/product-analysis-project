// images
import mxnetIconUrl from './mxnet_icon.png'
import tensorflowIconUrl from './tensorflow_icon.png'
import pytorchIconUrl from './pytorch_icon.png'

// custom styles
import './icon_header.css'

export default function renderIconHeader() {
    return `
    <div class="container mb-2">
        <div class="row">
            <div class="col-10 mx-auto">
                <header class="header-icon">
                    <h1 class="text-center">Let's Compare ML Libraries</h1>
                    <p class="text-center">Drag the icons below into the boxes to compare</p>
                    <div class="overflow-hidden">
                    <div class="row gx-1">
                        <div class="col my-auto" draggable="true">
                            <img class="icon-tensorflow mx-auto d-block icons" id="icon-tensorflow" src=${tensorflowIconUrl} alt="tensorflow_icon">
                        </div>
                        <div class="col my-auto" draggable="true">
                            <img class="icon-pytorch mx-auto d-block icons" id="icon-pytorch" src=${pytorchIconUrl} alt="pytorch_icon">
                        </div>
                        <div class="col my-auto" draggable="true">
                            <img class="icon-mxnet mx-auto d-block icons" id="icon-mxnet" src=${mxnetIconUrl} alt="mxnet_icon">
                        </div>
                    </div>
                    </div>
                </header>
            </div>
        </div>
    </div>
    `
}