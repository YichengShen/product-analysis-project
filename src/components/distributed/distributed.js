import '../../custom.css'

export default function renderDistributed(data) {
    return `
        <section class="bg-light pt-3 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        <div class="row gx-6">
                            <h4>Support for Distributed ML</h4>
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
        <div class="col col-custom">
            ${renderInside(d)}
        </div>
    `).join('');
}

function renderInside(d) {
    if (typeof d !== 'undefined') {
        return `
        <span>${d.distributed.context}</span>
        `
    } 
    else {
        return ``
    }

}