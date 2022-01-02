setInterval(() => {
    const accentColor = document.querySelectorAll('*[id^="accentColor"]')[0];
    if (accentColor) {
        const iframe = document.getElementById("preview-pane");
        const r = iframe.contentWindow.document.querySelector(':root');

        function colorChange() {
            r.style.setProperty("--accent", accentColor.value);
        }
        colorChange()

        let eListenerActive = false;
        if(eListenerActive) {
            accentColor.addEventListener('input', colorChange)
            eListenerActive = true
        }
    }
}, 1000)