/**
 When you’re creating a class, the class name is typically capitalized. Once you’ve created the class, you can create a new instance of the class using the new keyword. Then you can call the custom method on the class 
 */

// constructor Method is the First Method Excused as soon as we Initial the class with new Keyword

// we use this to Refer to Methods or Properties Inside class
let name = "outside class!";
let userName = "userName from outside the class";
class User {
  constructor(name, email) {
    this.userName = name;
    this.userEmail = email;
  }

  editName() {
    this.userName = "Tommy";
  }

  editEmail(email) {
    this.userEmail = email;
  }

  render() {
    return `user name is: ${this.userName} and user email is: ${this.userEmail}`;
  }
}

const user = new User("Alex", "alex@yahoo.com");

user.editName();
user.editEmail("tommy@gmail.com");

// read
console.log(user.render());
