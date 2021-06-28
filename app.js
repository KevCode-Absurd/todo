const addForm = document.querySelector(".add");
const listOfTodos = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `<li
  class="
    list-group-item
    d-flex
    justify-content-between
    align-items-center
  "
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  listOfTodos.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//Delete Todos
listOfTodos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//Filtering and searching for todos
const filterTodos = (term) => {
  Array.from(listOfTodos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(listOfTodos.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup events
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
