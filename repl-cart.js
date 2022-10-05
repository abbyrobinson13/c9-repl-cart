import rl from "readline-sync";

let commands = ["list products:"];

while (true) {
  console.log("The commands are: ", commands);

  const theCommand = rl.question("What is your command?: ");
  console.log(`Hello ${theCommand}`);

  if (theCommand === "list products") {
    console.log("the list of products is ...");
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
