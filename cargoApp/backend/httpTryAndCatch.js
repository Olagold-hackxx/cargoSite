function httpTryAndCatch(data, success=200, errStatus=404, msg=undefined, response) {
	try {
		data();
		response.status(success).json({
			success: true,
			data
		});
	}
	catch(error) {
		console.log(error);
		response.status(errStatus).json({
			success: false,
			message: msg ? msg : error.message
		})
	}
	return true;
}

module.exports = httpTryAndCatch;