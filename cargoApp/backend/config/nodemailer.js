module.exports = {
  service: 'Gmail',
  auth: {
	type: "OAUTH2",
	user: process.env.AUTH_EMAIL,
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    refreshToken: process.env.AUTH_REFRESH_TOKEN,
  },
};
