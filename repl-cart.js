import rl from "readline-sync";

let commands = ["list products", "show product", "add to cart"];
let products = [
  {
    name: "hair spray",
    price: "$5",
    description: "keep your hair in place",
    UPC: "34df359x",
  },
  {
    name: "butter",
    price: "$4",
    description: "I can't believe its butter",
    UPC: "1111abc222",
  },
  {
    name: "bananas",
    price: "$2",
    description: "Yellow and yummy",
    UPC: "4011",
  },
  { name: "dog treats", price: "$8", description: "go fetch!", UPC: "3gh5444" },
];

let cart = [];
let itemsInCart = 0;

while (true) {
  console.log("==========================\n The commands are: ", commands);

  const theCommand = rl.question("What is your command?: ");

  if (theCommand === "list products") {
    console.log("the list of products is: ");
    products.forEach((product) => {
      console.log("      - " + product.name);
    });
  } else if (theCommand === "show product") {
    const theName = rl.question("Which product would you like to see?: ");
    const theProduct = products.find((p) => p.name === theName);
    console.log("The product details are \n", theProduct);
  } else if (theCommand === "add to cart") {
    const theName = rl.question("Which product would you like to add?: ");
    const theProduct = products.find((p) => p.name == theName);
    cart.push(theProduct);
    console.log(cart);
    itemsInCart = cart.length;
    console.log("Added! You have " + itemsInCart + " items in your cart!");
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
