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
  console.log(req.body,232323223423)
  const {userId, productId, total} = req.body
  console.log({userId, productId, total})
  try {
    const user = await User.findOne({_id: userId}).lean()
    const idx = user.cart.findIndex(el => el.id === productId)
    console.log(idx)
    const targetProd = user.cart[idx]
    console.log(targetProd, 'targetProd')
    const newArr = idx > -1 ? user.cart.map((el, index) => {
      console.log('1111111111111111111111111111111111111111111111')
      if (idx === index) return {...targetProd, total: targetProd.total + total}
      return el
    }) : [...user.cart, {id: productId, total: total}]
    console.log(newArr, 'newArr')
    console.log(user, 'user')
    const a = await User.updateOne({
        _id: userId,
      },
      {
        cart: newArr
      })
    const product = await Products.findOne({_id: productId}).exec()
    console.log('1')

    await Products.updateOne({_id: productId}, {total: product.total - total})
    console.log('2')

    const carts = await User.findOne({_id: userId})
    console.log('3')

    res.status(201).json(carts)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.deleteOne = async function (req, res) {
  try {
    await User.updateOne({_id: req.params.user}, {$pull: {cart: {productId: req.params.id}}})
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