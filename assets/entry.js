(function () {
    const entry = document.querySelector('.entry-sequence');
    if (!entry) return;

    const close = () => {
        entry.remove();
        try { sessionStorage.setItem('machina-entry-seen', '1'); } catch (_) { /* storage can be unavailable */ }
    };

    try {
        if (sessionStorage.getItem('machina-entry-seen') === '1') {
            close();
            return;
        }
    } catch (_) { /* play the sequence when storage is unavailable */ }

    entry.querySelector('.entry-skip').addEventListener('click', close);
    entry.addEventListener('animationend', e => {
        if (e.target === entry) close();
    });
    // Keep the page usable if the browser suppresses animation events.
    window.setTimeout(close, 4600);
})();
