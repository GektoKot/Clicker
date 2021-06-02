let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}
function reset() {
    count = 0
    countEl.textContent = count
}

function decrement() {
    count--
    countEl.textContent = count
}
