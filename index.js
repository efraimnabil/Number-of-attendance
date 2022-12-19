let countEl = document.getElementById("count-el")
let count = 0
function increament() {
    count += 1
    countEl.innerText = count
}  

function decreament() {
    if(count > 0) {
        count -= 1
        countEl.innerText = count
    }
}

function reset() {
    count = 0
    countEl.innerText = count
}

function save() {
    let countStr = count
    let previousEl = document.getElementById("save-el")
    previousEl.innerText += "\n" + countStr
}

