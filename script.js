

const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];



const getTodoListFromLS = () => {
    return JSON.parse(localStorage.getItem("todoData")) || [];
};

const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todoData", JSON.stringify(todo));
};

const showTodoList = () => {
    todoListValue = getTodoListFromLS();
    todoListValue.forEach((curTodo) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = curTodo;
        todoLists.append(liElement);
    });
};

const removeTodoList = (e) => {
    //console.log(e.target.textContent);
    //console.log(todoListValue);
    let currentTodo = e.target;
    updatedTodoList = todoListValue.filter(
        (curTodoValue) => curTodoValue != currentTodo.textContent
    );

    addTodoListLocalStorage(updatedTodoList);
    currentTodo.remove();
    //method 1
    //todoLists.innerHTML = "";
    //showTodoList();

    //method 2
    //console.log(updatedTodoList);
}

const addTodoList = (e) => {
    e.preventDefault();

    todoListValue = getTodoListFromLS();
    let newTodo = listValue.value.trim();

    listValue.value = '';

    if (newTodo.length != 0) {
        todoListValue.push(newTodo);

        addTodoListLocalStorage(todoListValue);

        const liElement = document.createElement("li");
        liElement.innerHTML = listValue.value;
        todoLists.append(liElement);
    }

};

showTodoList();

document.querySelector(".btn").addEventListener("click", (e) => { addTodoList(e); });

todoLists.addEventListener('click', (e) => removeTodoList(e));