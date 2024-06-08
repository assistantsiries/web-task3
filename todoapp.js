let listcontainer = document.getElementById('list-container');
let inputBox = document.getElementById('input-box');

function addTask() {
    if (inputBox.value === '') {
        alert('Please Add Your Task..!!');
    }
    else {
        let task = document.createElement('li');

        task.textContent = inputBox.value;
        listcontainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span);


    }
    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener('click', (el) => {
    if (el.target.tagName == 'LI') {
        el.target.classList.toggle('checked');
        saveData();

    } else if (el.target.tagName == 'SPAN') {
        el.target.parentElement.remove();
        saveData();
    }


})

function saveData() {
    localStorage.setItem("task", listcontainer.innerHTML)
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem('task');

}

showData();