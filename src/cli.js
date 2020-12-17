import arg from "arg";
import { getProblem } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--update": Boolean,
      "--problem": Boolean,
      "-u": "--update",
      "-p": "--problem",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    updateData: args["--update"] || false,
    getProblem: args["--problem"] || false,
  };
}

async function promtForMissingOptions(options) {
}

export function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  console.log(options);
}
