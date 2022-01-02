const iframe = document.getElementById("preview-pane");
const r = iframe.contentWindow.document.querySelector(':root');
const accentColor = document.querySelectorAll('*[id^="accentColor"]')[0];

function colorChange() {
    r.style.setProperty("--accent", accentColor.value);
}
colorChange()

accentColor.addEventListener('input', colorChange)