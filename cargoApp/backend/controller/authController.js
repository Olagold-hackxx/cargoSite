const bcrypt = require("bcrypt");
const UserModel = require("../new/models/user");
const crypto = require("crypto");
const TokenModel = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const passwordMiddleware = require("../middleware/validators/passwordMiddleware")

const registerClient = async (req, res) => {
  try {
    const {lastName, firstName, mobileNumber, email, password } = req.body;

    // check if user exists
    const userExists = await UserModel.findOne({ email: email });
    if (userExists)
      return res
        .status(403)
        .json({ message: "user with that email already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create new user
  await UserModel.create({
      personalInformation: {
        informations: [
          {
            lastName,
            firstName,
            mobileNumber,
            email,
            password: hashedPassword,
            userType: 'client',
          },
        ],
      },
    })
      .then((result) => {
        return res.status(201).json({
          id: result._id,
          lastName: result.lastName,
          firstName: result.firstName,
          mobileNumber: result.mobileNumber,
          email: result.email,
          userType: result.userType,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const sendVerificationEmail = async (req, res) => {
  try {
    const email = req.body.email;

    // check if user exists
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "user does not exist" });

    // generate random string
    const verificationToken = crypto.randomBytes(10).toString("hex");

    // save created token to db
    await TokenModel.create({
      userId: user._id,
      token: verificationToken,
      createdAt: Date.now()
    });

    // send verification email
    await sendEmail(
      email,
      "user verification",
      `verification token: ${verificationToken}`
    );

    return res.status(200).json({ message: "verification link sent" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const verifyUser = async (req, res) => {
  try {
    // check if user exists
    const user = await UserModel.findOne({ _id: req.params.userId });
    if (!user) return res.status(400).json({ message: "invalid token" });

    // check if token is valid
    const token = await TokenModel.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).json({ message: "invalid token" });

    // verify user and delete token
    await UserModel.findByIdAndUpdate(user._id, { isEmailVerified: true });
    await TokenModel.findByIdAndRemove(token._id);

    // send verification compelete email
    await sendEmail(
      user.email,
      "user verification",
      "congratulations, your email verification is complete"
    );

    return res.status(200).json({ message: "user verified" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const googleSignIn = (req, res) => {
  try {
    const token = req.user;
    return res.status(201).json({ accessToken: token });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const loginUser = async (req, res) =>{
  try {
    const {email, password} = req.body;
  // const {error} =loginUserValidator.validate(req.body);
  // if (error) throw error;

  const user = await UserModel.findOne({email}).select('-password')
  if (!user) throw new Error('Invalid login details');

  //compare passwords
  const passwordsMatch = bcrypt.compareSync(password, user.password);
  if(!passwordsMatch) throw new UnAuthorizedError('Invalid login details')

  res.status(200).json({
      status: 'Success',
      message: 'Login Successful',
      data: {
          user
      }
  })
}catch (error) {
  return res.status(500).send(error);
}

  }


const requestPasswordReset = async (req, res, next) =>{
  try {
    const email = req.body.email
    const user = await UserModel.findOne({'personalInformation.informations.email':email})
    if (!user){
      const err = new Error();
      err.name = 'Authentication Error';
      err.status = 401;
      err.message = "This user does not exist";
      throw err
  }

  const token = await TokenModel.findOne({userId: user._id});
  if (token) await token.deleteOne();

  const resetPasswordToken = crypto.randomBytes(32).toString('hex');
  const hash = passwordMiddleware.hashPassword(resetPasswordToken);

  await new TokenModel({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

   // send verification email
   const link = `hostedServerLink/resetpassword?userId=${user._id}&resetToken=${resetPasswordToken}`
   await sendEmail(
    email,
    "password reset",
    `<p>You are receiving this email because you requested for a password reset. Click this link to reset your password: ${link}</p>`
  );

  return res.status(200).json({ message: "a password reset link has been sent" });
  } catch (error) {
      next(error)
  }
}

const updatePassword = async (req, res, next) =>{
  try {
   const token = req.params.token;
   const {password, confirmPassword} = req.body;

   const user = await UserModel.findOne({'personalInformation.informations.resetPasswordToken': token})
   if (!user){
    throw new Error('Invalid or expired reset token')
   }
   //hash Password
   const hashedPassword = bcrypt.hash(password, 12);
   //Update the user's password
   await UserModel.updateOne(
       {'personalInformation.informations.resetPasswordToken': token},
       {
           password: hashedPassword,
           resetPasswordToken: undefined,
           resetPasswordExpire: undefined
       }
   )
  return res.status(200).json({ message: "password updated successfully. you can proceed to log in." });
  } catch (error) {
      next(error)
  }
}


module.exports = {
  registerClient,
  sendVerificationEmail,
  verifyUser,
  googleSignIn,
  loginUser,
  requestPasswordReset,
  updatePassword
};
