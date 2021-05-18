function progressBar(selector, data) {
    // validation

    // logic
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const progress of data) {
        HTML += `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${progress.label}</div>
                        <div class="value">${progress.value}</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${progress.value}%;">
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>`;
    }

    // result return
    DOM.insertAdjacentHTML('afterend', HTML);
}

export { progressBar }