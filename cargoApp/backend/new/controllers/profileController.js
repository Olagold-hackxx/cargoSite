const UserModel = require('../models/user')

exports.postAvatar = (req, res) => {
  const image = req.file
  const role = req.body.role

  const avatar = image.path

  const userId = 'user_id_here' // Replace with the actual user ID

  // Find the user by their ID
  UserModel.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send(err)
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Update the avatar and role fields
    user.avatar = avatar
    user.role = role

    // Save the updated user document
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res
        .status(201)
        .json({ message: 'Avatar and role updated successfully' })
    })
  })
}

exports.postAddressInformation = (req, res) => {
  const { country, postalCode, homeAddress } = req.body

  const userId = 'user_id_here' // Replace with the actual user ID

  // Find the user by their ID
  UserModel.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send(err)
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Add the new address information to the user's address.informations array
    user.address.informations.push({
      country: country,
      postalCode: postalCode,
      homeAddress: homeAddress
    })

    // Save the updated user document
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res
        .status(201)
        .json({ message: 'Address information added successfully' })
    })
  })
}

exports.postCompanyInformation = (req, res) => {
  const { ownersName, companyName, country, contact, companyAddress } = req.body

  const userId = 'user_id_here' // Replace with the actual user ID

  // Find the user by their ID
  UserModel.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send(err)
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Add the new company information to the user's companyDetails.informations array
    user.companyDetails.informations.push({
      ownersName: ownersName,
      companyName: companyName,
      country: country,
      contact: contact,
      companyAddress: companyAddress
    })

    // Save the updated user document
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res
        .status(201)
        .json({ message: 'Company information added successfully' })
    })
  })
}

exports.postIdentityVerification = (req, res) => {
  const { passportFile, governmentIDFile } = req.file
  const passport = passportFile.path  //Fixed redeclaration of block scope variable
  const governmentID = governmentIDFile.path

  const userId = 'user_id_here' // Replace with the actual user ID

  // Find the user by their ID
  UserModel.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).send(err)
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Add the new identity verification information to the user's identityVerification.informations array
    user.identityVerification.informations.push({
      passport: passport,
      governmentID: governmentID
    })

    // Save the updated user document
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(500).send(err)
      }

      return res
        .status(201)
        .json({
          message: 'Identity verification information added successfully'
        })
    })
  })
}
