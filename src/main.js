import chalk from "chalk";
import Listr from "listr";
//const { exporting, Spider } = require("simple-webscraper");

export async function getProblem(options) {
  /*(async function () {
    try {
      const s = new Spider("https://www.jobsite.co.uk/jobs/javascript");
      await s
        .appendSelector(".job > .row > .col-sm-12")
        //.appendSelector("table.problem_list > .tbody")
        .setExportFunct(exporting.file("results.log", "INFO %s, %s, %s"))
        .run();
    } catch (e) {
      console.error(e);
    }
  })(); */

  //const tasks = new Listr([
  //    {
  //        title: 'Fetch Kattis problems',
  //        task: () => initProblems(options)
  //    },
  //]);

  //await tasks.run();

  console.log("%s Problems ready", chalk.green.bold("DONE"));
}
