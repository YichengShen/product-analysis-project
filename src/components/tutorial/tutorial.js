export default function renderTutor(data) {
    return `
        <section class="bg-light pt-3 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="row gx-6">
                            <h4>Tutorial Availability</h4>
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
        <span>${d.tutorial.context}</span>
        <br>
        <span>${d.tutorial.link}</span>
        `
    } 
    else {
        return ``
    }

}