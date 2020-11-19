// Model
const productsInit = [
  {
    id: 0,
    title: "nike t-shirt",
    price: 10,
  },
  {
    id: 1,
    title: "macbook pro 16",
    price: 1000,
  },
];

class ViewProducts {
  constructor(productsInit) {
    this.products = productsInit;
  }

  renderProducts() {
    let template = "";
    this.products.map((product) => {
      template += `${product.id + 1}- product name: ${product.title}, price: ${
        product.price
      } (ID ${product.id})  \n`;
    });

    return template;
  }

  renderTotalPrice() {
    // let totalPrice = 0;
    /* this.products.map((product) => {
      totalPrice += product.price;
    });*/

    let totalPrice = this.products.reduce(
      (box, product) => (box += product.price),
      0
    );
    return "Total price: " + totalPrice + " Euro";
  }
}
// Class inheritance is a way for one class to extend another class.
// So we can create new functionality on top of the existing.
//! "super":
// Classes provide "super" keyword for that.
// 1. super.method(...) to call a parent method.
// 2. super(...) to call a parent constructor (inside our constructor only).

class ProductsControls extends ViewProducts {
  constructor(productsInit) {
    // super method interacts with constructor in Parent class
    super(productsInit);
  }

  insertProduct({ title, price }) {
    // fix the id
    const newProduct = {
      title,
      price,
      id: this.products.length,
    };
    // clone products array
    const cloneProduct = [...this.products, newProduct];
    this.products = cloneProduct;
  }
  
  // edit product

  // remove product
}

const productsData = new ProductsControls(productsInit);

productsData.insertProduct({ title: "BlissLights Sky Lite", price: 49 });

// render views
console.log(productsData.renderProducts());
console.log(productsData.renderTotalPrice());
