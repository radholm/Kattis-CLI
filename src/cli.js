import arg from "arg";
import inquirer from "inquirer";
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
    update: args["--update"] || false,
    problem: args["--problem"] || false,
  };
}

async function promtForMissingOptions(options) {
  if (options.skipPrompts) {
    return {
      ...options,
    };
  }

  const questions = [];

  questions.push({
    type: "confirm",
    name: "prob",
    message: "Update?",
    default: false,
  });

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promtForMissingOptions(options);
  await getProblem(options);
  console.log(options);
}
