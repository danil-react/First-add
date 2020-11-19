const Cart = require('../models/User')
const Products = require('../models/Product')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const products = await Products.find();
    res.status(201).json(products)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.postOne = async function (req, res) {
  try {

  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.remove = async function (req, res) {
  try {
    await Cart.remove({_id: req.params.id})
    await Products.remove({product: req.params.id})
    res.status(200).json({
      message: 'product deleted'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.checkOut = async function (req, res) {
  try {

  } catch (e) {
    errorHandler(res, e)
  }
}