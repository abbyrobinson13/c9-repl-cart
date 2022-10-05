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

while (true) {
  console.log("==========================\n The commands are: ", commands);

  const theCommand = rl.question("What is your command?: ");

  if (theCommand === "list products") {
    console.log("the list of products is: ");
    products.forEach((product) => {
      console.log("      - " + product.name);
    });
  } else if (theCommand === "show product") {
    console.log("Poduct details GO HERE");
  } else if (theCommand === "add the cart") {
    console.log("added to cart");
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
