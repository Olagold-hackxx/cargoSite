const Package = require("../models/Package");
const tryAndCatch = requie("../tryAndCatch");

const addNewPackage = async () => {
  tryAndCatch(async () => {
    const { name, weight, category } = req.body;
    const package = await Package.create({
      name,
      weight,
      category,
    });
    if (!package) {
      return res
        .status(400)
        .json({
          message: "Error creating new package, try again later please",
        });
    }
    return res.status(200).json(package);
  });
};


const updatePackage = async () => {
  tryAndCatch(async () => {
    const { _id, name, weight, category } = req.body;
    const package = await Package.updateOne(
      { _id: _id },
      {
        name,
        weight,
        category,
      }
    );
    if (!package) {
      return res
        .status(400)
        .json({
          message: "Error updating package,  please try again",
        });
    }
    return res.status(200).json(package);
  });
};

const deletePackage = async () => {
	tryAndCatch(async () => {
	  const package = await Package.deleteOne(
		{ _id: _id }
	  );
	  if (package) {
		return res
		  .status(400)
		  .json({
			message: "Error delete package,  please try again",
		  });
	  }
	  return res.status(200).json({message: "Successfully delete package"});
	});
  };