import { Add } from "./calculator.js";
import readline from "readline";

export function runInteractiveCLI() {
  console.log("=== String Calculator (TDD Kata) ===");
  console.log("Enter numbers to calculate (or 'exit' to quit)");
  console.log("Examples:");
  console.log("  1,2,3 → 6");
  console.log("  1\\n2,3 → 6");
  console.log("  //;\\n1;2;3 → 6");
  console.log("  //[***]\\n1***2***3 → 6");
  console.log("  //[*][%]\\n1*2%3 → 6");
  console.log("");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const promptUser = () => {
    rl.question("Enter numbers: ", (input) => {
      if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
        console.log("Goodbye!");
        rl.close();
        return;
      }

      try {
        // Convert escape sequences in user input
        const processedInput = input.replace(/\\n/g, '\n');
        const result = Add(processedInput);
        console.log(`Result: ${result}`);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
      
      console.log(""); // Empty line for readability
      promptUser(); // Continue prompting
    });
  };

  promptUser();
}

// Run CLI if this file is executed directly
if (process.argv[1] && process.argv[1].endsWith('index.js')) {
  runInteractiveCLI();
}