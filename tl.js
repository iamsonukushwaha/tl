let nIntervId;

function changeColor() {
    // check if already an interval has been set up
    if (!nIntervId) {
        nIntervId = setInterval(flashText, 2000);
    }
}

function flashText() {
    const oElem = document.getElementById("my_box");
    const tl = document.getElementById("tl");
    if (oElem.className === "ready") {
        oElem.className = "go";
        tl.innerText = "GO";
    } else if (oElem.className === "go") {
        oElem.className = "stop";
        tl.innerText = "STOP";
    } else {
        oElem.className = "ready";
        tl.innerText = "READY";
    }
}

function stopTextColor() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);