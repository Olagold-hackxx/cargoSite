const Category = require("../models/Category");

const allCategories = async (req, res) => {
  const categories = await Category.find();
  console.log(categories);
  return res.status(200).json(categories);
};

const getCategoryById = async (req, res) => {
  const categories = await Category.findOne({_id: req.params.categoryId});
  console.log(categories);
  if (!categories) {
    return res.status(400).json({ message: "Can't find category" });
  }
  return res.status(200).json(categories);
};

const updateCategory = async () => {
	tryAndCatch(async () => {
	  const { _id, name, minPricePerKg, maxPricePerKg } = req.body;
	  const package = await Category.updateOne(
		{ _id: _id },
		{
		  name,
		  minPricePerKg,
		  maxPricePerKg,
		}
	  );
	  if (!package) {
		return res
		  .status(400)
		  .json({
			message: "Error updating category,  please try again",
		  });
	  }
	  return res.status(200).json(package);
	});
  };

  const deleteCategory = async () => {
	  tryAndCatch(async () => {
		const { _id, name, weight, category } = req.body;
		const package = await Category.deleteOne(
		  { _id: _id }
		);
		if (package) {
		  return res
			.status(400)
			.json({
			  message: "Error deleting category,  please try again",
			});
		}
		return res.status(200).json({message: "Successfully delete category"});
	  });
	};