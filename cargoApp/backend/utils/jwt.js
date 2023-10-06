const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessCookieJWT = createJWT({ payload: { user } });
  const refreshCookieJWT = createJWT({ payload: { user, refreshToken } });

  const oneDay = 1000 * 60 * 60 * 24;
  const longerExp = 1000 * 60 * 60 * 24 * 30;

  res.cookie('accessToken', accessCookieJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

  res.cookie('refreshToken', refreshCookieJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + longerExp),
  });
};
// const attachSingleCookieToResponse = ({ res, user }) => {
//   const token = createJWT({ payload: user });

//   const oneDay = 1000 * 60 * 60 * 24;

//   res.cookie('token', token, {
//     httpOnly: true,
//     expires: new Date(Date.now() + oneDay),
//     secure: process.env.NODE_ENV === 'production',
//     signed: true,
//   });
// };

// const jwt = require("jsonwebtoken");
// require('dotenv').config()

// const verifyToken = (req, res, next) => {
//   if (!req.headers.authorization)
//     return res.status(403).json({ msg: "Not authorized, no token." });

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer ")
//   ) {
//     const token = req.headers.authorization.split(" ")[1];
//     jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
//       if (err) return res.status(403).json({ msg: "Wrong or expired token" });
//       else {
//         req.user = data; //data = {id: user._id}
//         next();
//       }
//     });
//   }
// };

// module.exports = verifyToken;
module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
};
