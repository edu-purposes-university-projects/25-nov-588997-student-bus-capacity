import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const students: string[] = [];

  console.log("Enter student names. Type '9' when done.");

  while (true) {
    const input = await rl.question("Student name or '9': ");
    if (input === "9") break;
    students.push(input);
  }

  while (true) {
    const input = await rl.question("Enter car capacity: ");
    const number = parseInt(input, 10);

    if (isNaN(number)) {
      console.log("Please enter a valid number.");
      continue;
    }

    if (students.length > number) {
      console.log("This car cannot hold that many students.");
    } else {
      console.log("This car can hold that many students.");
    }
    break;
  }

  rl.close();
}

main();
