const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  avatar:{
    type:String,
    required:true
  },
  role : {
    type:String,
    required:true
  },
  personalInformation: {
    informations: [
      {
        lastName: { type: String, required: true },
        firstName: { type: String, required: true },
        mobileNumber: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        userType: {
          type: String,
          enum: ["client", "freelancer"],
        },
        isEmailVerified: { type: Boolean, default: false },
        isGoogleUser: { type: Boolean, default: false },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
      },
    ],
  },
  address:{
    informations:[
      {
        country:{type:String, required: true},
        postalCode:{type:String, required:true},
        homeAddress:{type:String, required:true},
      }
    ]
  },
  companyDetails:{
    informations:[
      {
        ownersName:{type:String, required: true},
        companyName:{type:String, required: true},
        country:{type:String, required:true},
        contact:{type:String, required:true},
        companyAddress:{type:String, required:true}
      }
    ]
  },
  identityVerification:{
    informations:[{
      passport:{type:String, required:true},
      governmentID:{type:String, required:true}
    }]
  }
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
