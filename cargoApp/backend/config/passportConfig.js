const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const UserModel = require("../new/models/user");

/**
 * generate an access token for user
 * @param {string} userId : id of user
 * @param {*string} email : email of user
 * @returns
 */
const signToken = (userId, email) => {
  // sign access token
  return jwt.sign({ id: userId, email: email }, process.env.ACCESS_SECRET, {
    expiresIn: process.env.ACCESS_EXPIRES_IN,
  });
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/api/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // return access token if user already exists
        const userExists = await UserModel.findOne({
          email: profile._json.email,
        });
        if (userExists) {
          const token = signToken(userExists._id, userExists.email);
          return done(null, token);
        }

        // save user to db and return access token if user does not exist
        const user = await UserModel.create({
          email: profile._json.email,
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          isEmailVerified: true,
          isGoogleUser: true,
        });

        const token = signToken(user._id, user.email);
        return done(null, token);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);
module.exports = passport;
