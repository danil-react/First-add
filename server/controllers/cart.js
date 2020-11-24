const User = require('../models/User')
const Products = require('../models/Product')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const carts = await User.findById(req.user.id)
    if (carts !== null) {
      res.status(201).json(carts.cart)
    } else {
      res.status(404).json({
        message: 'cart is empty'
      })
    }
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.postOne = async function (req, res) {
  try {
    await User.update({
        _id: req.user.id,
      },
      {
        $push: {
          cart: [
            {
              productId: req.body.product,
              title: req.body.title,
              total: req.body.total
            }
          ]
        }
      })
    const product = Products.findById(req.body.product)
    await Products.update({_id: req.body.product}, {$set: {total: product.total - req.body.total}})
    const carts = await User.findOne({_id: req.user.id})
    res.status(201).json(carts)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await User.updateOne({_id: req.user.id}, {$pull: {cart: {productId: req.body.productId}}})
    const product = Products.findById(req.body.product)
    await Products.update({_id: req.body.product}, {$set: {total: product.total + req.body.total}})
    res.status(200).json({
      message: 'product deleted'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.checkOut = async function (req, res) {
  try {
    await User.updateOne({_id: req.user.id}, {$pull: {cart: {productId: req.body.productId}}})
    res.status(200).json({
      message: 'The product is supposedly sold successfully'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}