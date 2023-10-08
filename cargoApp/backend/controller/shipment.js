const Shipment = require('../models/Shipment');

const allUserShipment = async (req, res) => {
	const shipments = await Shipment.find({
		userId: req.params.userId
	});
	console.log(shipments);
	return res.status(200).json(shipments);
  };

  const getShipmentById = async (req, res) => {
	const shipments = await Shipment.findOne({_id: req.params.shipmentId});
	console.log(shipments);
	if (!shipments) {
	  return res.status(400).json({ message: "Can't find shipment with this Id" });
	}
	return res.status(200).json(shipments);
  };