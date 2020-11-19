const Products = require('../models/Product')
const Carts = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
  try {
    const products = await Products.find({user: req.user.id});
    res.status(200).json(products)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getOne = async function (req, res) {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const carts = await new Carts({
      cart: req.body.cart,
      user: req.user.id,
      total: maxTotal - total
    }).save()
    res.status(201).json(carts)
  } catch (e) {
    errorHandler(res, e)
  }
};

// const candidate = await User.findOne({
//   email: body.email
// });
// if (candidate) {
//   const checkProduct = await Products.findOne({
//     title: product.title
//   });
//   if (checkProduct) {
//     res.status(409).json({
//       message: 'such an name is already taken'
//     })
//   } else {
//     let productObject = new Cleaner({
//       id: product.id,
//       img: product.img,
//       title: product.title,
//       price: product.price,
//       info: product.info,
//       total: product.total
//     });
//     try {
//       await productObject.save();
//       res.status(201).json({
//         cleaner: productObject
//       })
//     } catch (e) {
//       errorHandler(res, e)
//     }
//   }
// } else {
//   res.status(403).json({
//     message: 'permission denied'
//   })
// }