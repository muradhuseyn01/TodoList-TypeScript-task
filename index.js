//Todo-list
var container = document.querySelector('.container');
var formTodo = document.querySelector('#todo-form');
var input = document.querySelector('#txtinput');
var button = document.querySelector('#btn-todo');
var ul = document.createElement('ul');
ul.classList.add('todo_list');
container.appendChild(ul);
button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(input.value);
});
function addClick() {
    if (input.value === '') {
        input.classList.add('error');
        alert('Enter a value');
    }
    else {
        input.classList.remove('error');
        createElem();
    }
    input.value = '';
    save();
}
addClick();
function createElem() {
    var li = document.createElement('li');
    var span = document.createElement('span');
    var img = document.createElement('img');
    span.textContent = input.value;
    img.src = "./icons/xmark-solid.svg";
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);
}
ul.addEventListener('click', function (e) {
    {
        var element = e.target;
        var elementParent = element.parentElement;
        if (element.tagName === 'LI') {
            element.classList.toggle('checked');
            save();
        }
        else if (element.tagName === 'IMG') {
            elementParent.remove();
        }
        save();
    }
}, false);
function save() {
    localStorage.setItem('data', ul.innerHTML);
}
function saveGet() {
    ul.innerHTML = localStorage.getItem('data');
}
saveGet();
