// custom styles
import './drag_drop.css'


export default function renderDragDropArea() {
    return `
    <div class="drag-drop-section">

    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto">
                <div class="row gx-6">
                    ${renderDropArea()}
                </div>
            </div>
        </div>
        <div id="reset-button" class="d-flex justify-content-center"></div>
    </div>

    </div>
    `
}

function renderDropArea() {
    return _.range(1, 4).map(id => `
        <div class="col" id="product-${id}">
            <h6 class="text-center">Product ${id}</h6>
            <div class="d-flex justify-content-center align-items-center drop-area">
                ${renderDragPrompt()}
            </div>
        </div>
    `).join('');
}

function renderDragPrompt(id){
    return `<p class="text-center drag-prompt">Drag icon to here</p>`;
}

function removeDragPrompt(e){
    // only remove p
    const prompts = document.querySelectorAll("p")
    prompts.forEach(prompt => {
        if (e.target.contains(prompt)){
            e.target.innerHTML = ``;
        }
    })
}

export function addDragDrop() {
    const icons = document.querySelectorAll('.icons')
    icons.forEach(icon => {
        icon.addEventListener('dragstart', dragStart);
    });

    const boxes = document.querySelectorAll('.drop-area')
    boxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
    });
}

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    removeDragPrompt(e);
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    removeDragPrompt(e);
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.innerHTML = '';
    e.target.appendChild(draggable);

    draggable.setAttribute('draggable', false)

    renderReset()
}

function renderReset() {
    const buttonDiv = document.querySelector("#reset-button") 
    buttonDiv.innerHTML = `
        <button type="button" onclick="location.reload()" class="btn btn-outline-info btn-custom">
            Reset
        </button>
    `
}
