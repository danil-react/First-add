const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      id:{
        type: Number,
      },
      title:{
        type: String,
      },
      total: {
        type: Number,
      },
    }
  ]
})

module.exports = mongoose.model('users', userSchema)