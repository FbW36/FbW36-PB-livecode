// ToDos List App WITH CLASS

const initToDosStore = ["Shopping", "Home work", "Go to the gym"];
class TodosListApp {
  constructor(initStore) {
    this.toDosStore = initStore;
  }

  insertTodo(newTodo) {
    this.toDosStore.push(newTodo);
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
