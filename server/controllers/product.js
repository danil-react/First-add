const Products = require('../models/Product')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const products = await Products.find();
    res.status(200).json(products)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getOne = async function (req, res) {
  try {
    const product = await Products.findById(req.body.id);
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({
        message: 'not found'
      })
    }
  } catch (e) {
    errorHandler(res, e)
  }
}

// module.exports.create = async function (req, res) {
//   try {
//     const cartObject = await new Cart({
//       id: req.cart.id,
//       title: req.cart.title,
//       total: req.cart.total
//     });
//     await cartObject.save();
//     res.status(201).json({
//       cart: cartObject
//     })
//     //remove total for product
//     // res.status(201).json(carts)
//   } catch (e) {
//     errorHandler(res, e)
//   }
// };

