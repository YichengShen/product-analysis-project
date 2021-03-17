export default function rendertakeaway(data) {
    return `
        <section class="bg-light pt-3 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="row gx-6">
                            <h4>Takeaways</h4>
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
            <span class="fw-lighter fst-italic">Pros</span>
            <br>
            <span>${d.takeaway.advantage}</span>
            <br>
            <span class="fw-lighter fst-italic">Cons</span>
            <br>
            <span>${d.takeaway.disadvantage}</span>
        `
    } else {
        return `<div class="col"></div>`
    }
}