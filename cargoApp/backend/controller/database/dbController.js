const mongoose = require("mongoose");
require("dotenv").config();
const tryAndCatch = require("../../tryAndCatch");

class dbController {
  constructor(model) {
    this.model = model;
  }
 async connect() {
    await mongoose
      .connect(process.env.DATABASE)
      .then(() => {
		console.log("DB connected");
		return true;
	  })
      .catch((error) => {
		console.log("DB error", error);
		return false
	  })
  }
  async create(value) {
	try {
		console.log("Creating data");
		const data = await this.model.create(value);
		console.log(data)
		return data;
	}
	catch (error) {
		console.log(error);
	}
    }

  update(value) {
	 tryAndCatch(
        async () => await this.model.update(value)
      );
    }
  delete(value) {
    tryAndCatch(
        async () => await this.model.update(value)
      );
    }
  save() {
	tryAndCatch(
        async () => await this.model.save()
      );
  }
  find(id=null, data) {
	tryAndCatch(
        async () => {
			if (id) {
				await this.model.findById(data);
			}
			else {
				await this.model.findOne(data);
			}
		})
	  return result;
  }
}

module.exports = dbController;
