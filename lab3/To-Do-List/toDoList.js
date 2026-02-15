const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('btn');
const todoList = document.getElementById('todo-list');
const logo = document.querySelector('.logo');

// Логотипті басқанда бетті жаңарту
logo.addEventListener('click', () => {
    location.reload();
});

// Тапсырма қосу функциясы
addBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Форма жіберілгенде беттің жаңартылуын тоқтату

    if (todoInput.value === "") return; // Бос болса қоспау

    // Әр checkbox үшін бірегей ID жасау
    const id = Date.now();

    // HTML құрылымын жасау
    const li = document.createElement('li');
    li.classList.add('todo');
    
    li.innerHTML = `
        <input type="checkbox" id="todo-${id}">
        <label class="user-checkbox" for="todo-${id}">
            <span class="checkbox-text">${todoInput.value}</span>
        </label>
        <button class="delete-button">
            <img class="icon delete" src="icons/delete.png">
        </button>
    `;

    todoList.appendChild(li);
    todoInput.value = ""; // Мәтінді өшіру
});

// Өшіру және белгілеу (Event Delegation)
todoList.addEventListener('click', (e) => {
    const target = e.target;

    // Өшіру логикасы
    if (target.classList.contains('delete') || target.classList.contains('delete-button')) {
        target.closest('.todo').remove();
    }

    // Checkbox логикасы
    if (target.type === 'checkbox') {
        const text = target.parentElement.querySelector('.checkbox-text');
        text.classList.toggle('checked');
    }
});