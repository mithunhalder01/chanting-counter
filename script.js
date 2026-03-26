function plus() {
    let curValText = document.getElementById("curVal").innerText;
    let curVal = Number(curValText);
    let newVal = curVal + 1;
    
    if (newVal > 107) {
        // Seamless reset like chanting counter
        document.getElementById("curVal").innerText = 0;
        let totalValText = document.getElementById("totalVal").innerText;
        let totalVal = Number(totalValText);
        document.getElementById("totalVal").innerText = totalVal + 1;
    } else {
        document.getElementById("curVal").innerText = newVal;
    }
}

function minus() {
    let store = document.getElementById("curVal").innerText;
    if ((Number)(store) <= 0) {
        alert("invalid")
    } else {
        document.getElementById("curVal").innerText = (Number)(store) - 1;
    }


}
function reset() {
    let store = document.getElementById("curVal").innerText;
    document.getElementById("curVal").innerText = (Number)(store) * 0;
}

//total round 

function tPlus() {
    let store = document.getElementById("totalVal").innerText
    document.getElementById("totalVal").innerText = (Number)(store) + 1;
}

function tMinus() {
    let store = document.getElementById("totalVal").innerText;
    if ((Number)(store) <= 0) {
        alert("invalid")
    } else {
        document.getElementById("totalVal").innerText = (Number)(store) - 1;
    }


}
function tReset() {
    let store = document.getElementById("totalVal").innerText;
    document.getElementById("totalVal").innerText = (Number)(store) * 0;
}
