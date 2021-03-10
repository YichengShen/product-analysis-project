export default function renderGeneralInfo(data) {
    return `
        <section class="pt-3 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="row gx-6">
                            <h4>General Information</h4>
                            ${renderEach(data)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}

function renderEach(data) {
    return data.map(d => `
        <div class="col">
            ${renderInside(d)}
        </div>
    `).join('');
}

function renderInside(d) {
    if (typeof d !== 'undefined') {
        return `
            <span class="fw-lighter">Name: </span>
            <span>${d.geninfo.name}</span>
            <br>
            <span class="fw-lighter">Developer: </span>
            <span>${d.geninfo.developer}</span>
        `
    } else {
        return `<div class="col"></div>`
    }
}