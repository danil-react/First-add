const User = require('../models/User')
const Products = require('../models/Product')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const carts = await User.find()
    res.status(201).json(carts.cart)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.postOne = async function (req, res) {
  try {
    await User.update({
        _id: req.user.id,},
      {
        $push:{
          cart:[
            {
              productId:req.body.product,
              title: req.body.title,
              total: req.body.total
            }
          ]
        }
      })
    const carts = await User.findOne({_id: req.user.id})
    res.status(201).json(carts)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await User.updateOne({_id: req.user.id}, {$pull:{cart:{productId: req.body.productId}}})
    //return total in product
    res.status(200).json({
      message: 'product deleted'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.checkOut = async function (req, res) {
  try {
    await User.updateOne({_id: req.user.id}, {$pull:{cart:{productId: req.body.productId}}})
  } catch (e) {
    errorHandler(res, e)
  }
}