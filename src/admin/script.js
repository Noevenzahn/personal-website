const iframe = document.getElementById("preview-pane");
let r;
const accentColor = document.querySelectorAll('*[id^="accentColor"]')[0];

function colorChange() {
    r.style.setProperty("--accent", accentColor.value);
}
accentColor.addEventListener('input', colorChange)

iframe.addEventListener("load", function() {
    r = iframe.contentWindow.document.querySelector(':root');
    colorChange()
})