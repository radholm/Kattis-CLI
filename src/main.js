import chalk from "chalk";
import Listr from "listr";

export async function getProblem(options) {
  const tasks = new Listr([
    {
      title: "Fetch Kattis problems",
      task: () => webScrape(),
    },
  ]);

  await tasks.run();

  console.log("%s Problems ready", chalk.green.bold("DONE"));
  return true;
}

export async function webScrape() {
  const { exporting, Spider } = require("simple-webscraper");

  try {
    const startURL = "https://open.kattis.com/problems?page=0";
    const crawler = new Spider(startURL);
    crawler
      .appendSelector("table.problem_list > tbody > tr")
      .appendFollowSelector(".dataTables_paginate a[href*='page=']")
      .setSiteCount(9999)
      .setRespSecW8(9999)
      .setResultCount(9999)
      .setTimeLimit(120)
      .setThreadCount(8)
      .setExportFunct(exporting.file("results.log"))
      .run();
  } catch (e) {
    console.error(e);
  }
  return;
}
