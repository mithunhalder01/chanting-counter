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
    saveData();
}

function minus() {
    let store = document.getElementById("curVal").innerText;
    if ((Number)(store) <= 0) {
        alert("invalid")
    } else {
        document.getElementById("curVal").innerText = (Number)(store) - 1;
        saveData();
    }


}
function reset() {
    let store = document.getElementById("curVal").innerText;
    document.getElementById("curVal").innerText = (Number)(store) * 0;
    saveData();
}

//total round 

function tPlus() {
    let store = document.getElementById("totalVal").innerText
    document.getElementById("totalVal").innerText = (Number)(store) + 1;
    saveData();
}

function tMinus() {
    let store = document.getElementById("totalVal").innerText;
    if ((Number)(store) <= 0) {
        alert("invalid")
    } else {
        document.getElementById("totalVal").innerText = (Number)(store) - 1;
        saveData();
    }


}
function tReset() {
    let store = document.getElementById("totalVal").innerText;
    document.getElementById("totalVal").innerText = (Number)(store) * 0;
    saveData();
}

// localStorage functions
function saveData() {
    const currentVal = document.getElementById("curVal").innerText;
    const totalVal = document.getElementById("totalVal").innerText;
    
    const data = {
        currentCount: currentVal,
        totalCount: totalVal
    };
    
    localStorage.setItem('chantingData', JSON.stringify(data));
}

function loadData() {
    const savedData = localStorage.getItem('chantingData');
    
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById("curVal").innerText = data.currentCount || 0;
        document.getElementById("totalVal").innerText = data.totalCount || 0;
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadData();
});
