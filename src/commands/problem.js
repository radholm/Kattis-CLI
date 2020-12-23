"use strict";

const { Command } = require("@adonisjs/ace");

class Problem extends Command {
  static get signature() {
    return `
      problem
      { update?: Update problem database }
    `;
  }

  static get description() {
    return "Get a problem from Kattis database";
  }

  async handle() {
    console.log("hello problem");
  }
}

module.exports = Problem;
