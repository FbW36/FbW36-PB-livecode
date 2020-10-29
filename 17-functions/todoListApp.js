// ToDos List App

// "Shopping", "Home work", "Go to the gym"
const toDosStore = ["Shopping", "Home work", "Go to the gym"];
//------------###########-----------
// App Functions

//! create
// create function to Insert new items to toDosStore
function insertTodo(newTodo) {
  toDosStore.push(newTodo);
}

//! read
// RenderToDosListTemplate function
// this function prints the end Results as string template.
// check if toDosStore is empty return a message (To do list stor is empty)
// else return todos template
function RenderToDosListTemplate() {
  //check if toDosStore is empty return a message (To do list stor is empty)
  if (toDosStore.length < 1) {
    return "To do list stor is empty";
  } else {
    // toDosStore is not empty (we have todos items)
    // create a Variable ==> template store
    let template = "ToDo List: " + "\n";

    // for loop go Through toDosStore items and add each item to template
    for (let i = 0; i < toDosStore.length; i++) {
      template = `${template} ${i + 1}- ${toDosStore[i]} \n`;
    }

    return template;
  }
}

//------------###########-----------
// Call Stack
insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");

//--------------------
// render to do template
console.log(RenderToDosListTemplate());

//--------------------

//------------###########-----------

/**
if  toDosStore is empty ==> To do list is empty


ToDo List:
 1- Shopping
 2- Home work
 3- Go to the gym

 */
