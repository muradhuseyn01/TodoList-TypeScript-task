//Todo-list
let container = document.querySelector('.container') as HTMLDivElement;
let formTodo = document.querySelector('#todo-form') as HTMLFormElement;
let input = document.querySelector('#txtinput') as HTMLInputElement;
let button = document.querySelector('#btn-todo') as HTMLButtonElement;

let ul = document.createElement('ul') as HTMLUListElement;
ul.classList.add('todo_list');
container.appendChild(ul);

button.addEventListener('click', (e: Event) => {
    e.preventDefault();
    console.log(input.value);
})

function addClick() {
    if (input.value === '') {
        input.classList.add('error');
        alert('Enter a value');
    } else {
        input.classList.remove('error');
        createElem();
    }
    input.value = '';
    save()
}
addClick()

function createElem() {
    let li = document.createElement('li') as HTMLLIElement;
    let span = document.createElement('span') as HTMLSpanElement;
    let img = document.createElement('img') as HTMLImageElement;
    span.textContent = input.value;
    img.src = "./icons/xmark-solid.svg";
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);
}

ul.addEventListener('click', function (e: Event) {
    {
        let element = e.target as HTMLElement;
        let elementParent = element.parentElement as HTMLPreElement;
        if (element.tagName === 'LI') {
            element.classList.toggle('checked');
            save();
        } else if (element.tagName === 'IMG') {
            elementParent.remove();
        }
        save();
    }
}, false)

function save() {
    localStorage.setItem('data', ul.innerHTML);
}
function saveGet() {
    ul.innerHTML = localStorage.getItem('data') as string;
}
saveGet();