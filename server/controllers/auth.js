const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
  console.log(req.body)
  const candidate = await User.findOne({email: req.body.email})

  if(candidate){
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if(passwordResult){
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})
      res.status(200).json({
        message: 'Token is found',
        token: `Bearer ${token}`
      })

      res.status(201).json(candidate)
    } else {
      res.status(401).json({
        message: 'Passwords do not match'
      })
    }
  } else {
    res.status(404).json({
      message: 'User not found'
    })
  }
}

module.exports.registration = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    res.status(409).json({
      message: "This email is exist."
    })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
      cart: []
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
     errorHandler(res, e)
    }
  }
}