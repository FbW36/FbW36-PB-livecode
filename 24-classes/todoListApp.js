// ToDos List App WITH CLASS

const initToDosStore = ["Shopping", "Home work", "Go to the gym"];
class TodosListApp {
  constructor(initStore) {
    this.toDosStore = initStore;
  }

  insertTodo(newTodo) {
    this.toDosStore.push(newTodo);
  }
  createTodos(todos) {
    todos.map((item) => this.toDosStore.push(item));
  }

  removeTodo(orderNumber) {
    this.toDosStore.splice(orderNumber - 1, 1);
  }

  editTodo(orderNumber, newValue) {
    this.toDosStore[orderNumber - 1] = newValue;
  }

  RenderToDosListTemplate() {
    if (this.toDosStore.length < 1) {
      return "To do list stor is empty";
    } else {
      let template = "ToDo List: " + "\n";
      for (let i = 0; i < this.toDosStore.length; i++) {
        template = `${template} ${i + 1}- ${this.toDosStore[i]} \n`;
      }

      return template;
    }
  }
}

const todoseListApp = new TodosListApp(initToDosStore);

//------------###########-----------
// Call Stack
todoseListApp.insertTodo("test1");
todoseListApp.insertTodo("test2");
todoseListApp.insertTodo("test4");
todoseListApp.insertTodo("test5");
todoseListApp.removeTodo(5);
todoseListApp.removeTodo(2);
todoseListApp.insertTodo("Call Alex");
todoseListApp.editTodo(3, "Pay bills");
todoseListApp.editTodo(5, "Visiting Tommy");
todoseListApp.createTodos([
  "Go to supermarket",
  "Meet with Ghassan",
  "New test",
]);

//--------------------
// render to do template

console.log(todoseListApp.RenderToDosListTemplate());
//--------------------

//------------###########-----------

/**
if  toDosStore is empty ==> To do list is empty


ToDo List:
 1- Shopping
 2- Home work
 3- Go to the gym

 */
