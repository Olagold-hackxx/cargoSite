#!/usr/bin/node

//Console to run CRUD on MongoDB database

//database controller

const prompt = require("prompt-sync")({ sigint: true });
const dbController = require("./controller/database/dbController");
const database = new dbController();

//database models
const User = require("./models/User");
const Package = require("./models/Package");
const Price = require("./models/Price");
const Category = require("./models/Category");
const Shipment = require("./models/Shipment");

class dbTerminal {
  ops = ["create", "find", "update", "delete"];
  models = {
    User: new dbController(User),
    Category: new dbController(Category),
    Package: new dbController(Package),
    Price: new dbController(Price),
    Shipment: new dbController(Shipment),
  };

  constructor() {
  }

  async cmd(arg) {
    if (arg.length >= 1) {
      if (this.ops.includes(arg[0])) {
        if (this.models[arg[1]]) {
          if (arg.length >= 3) {
            let params = this.key_value_parser(arg.slice(2));
						const data = await this.models[arg[1]][arg[0]](params)
						console.log(data)
          } else {
            console.log("No paramaters added");
            this.exit();
          }
        } else {
          console.log(`Model ${arg[1]} doesn't exist`);
          this.exit();
        }
      } else {
        console.log(`Command ${arg[0]} doesn't exist`);
        this.exit();
      }
    } else {
      console.log(`
Wrong usage!
Usage: ./console.js model parameters(key=value)
Example: ./console.js Create User name=Abdul_Jamal email=abdul@jamal.com
	     ./console.js Create User name=John_Davis email=john@davis.com
	`);
      this.exit();
    }
  }

  key_value_parser(args) {
    let params = {};
    args.map((arg) => {
      arg = arg.split("=");
      const key = arg[0];
      const value = arg[1];
      value.replace(/_/g, " ");
      params[key] = value;
    });
    return params;
  }

  exit() {
    return false;
  }
}
console.log("Starts");
console.log("Awaiting db connection")
const terminal = async () => {
	while (1) {
		let input = prompt("$ ");
		let arg = input.split(" ");
		const cmdLine = new dbTerminal();
		await cmdLine.cmd(arg);
		}
	}
database.connect()
.then(() => {
	terminal()
	}
);
