import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — one kind, funny fortune for the houseplant on the
// windowsill, written as a prediction for the plant itself. 113 chars:
// the gate needs UTF-8 text of 1 to 120 characters, a single line.
const FORTUNE =
  "Soon the sun will find your favourite windowsill leaf, and your keeper will finally stop calling you 'the plant'.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", FORTUNE, "utf8");
  } catch (error) {
    console.error("could not write /output/entry.txt:", error);
    process.exit(1);
  }
}

main();
