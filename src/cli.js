const ace = require("@adonisjs/ace");
import { getProblem } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  ace.addCommand(require("./commands/problem"));
  ace.wireUpWithCommander();
  ace.invoke();
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  await getProblem(options);
}
