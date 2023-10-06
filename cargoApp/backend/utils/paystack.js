//Call to PayStack API
const axios = require("axios");


async function callPayStackApi(method, url, data) {
	return await axios({
	  method,
	  url,
	  ...(method === 'post' ? data : {}),
	  headers: {
		Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
		'Content-Type': 'application/json'
	  },
	})
	.then((res)=> {
		console.log("Payment initiated", res.data);
		return res.data;
	})
	.catch(err => {
		console.log(err);
	})
  }

module.exports = callPayStackApi;