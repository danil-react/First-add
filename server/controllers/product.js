const Products = require('../models/Product')
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
    const product = await Products.findOne({_id: req.params.id})
    console.log(product)
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

module.exports.create = async function (req, res) {
  try {
    const productObject = new Products({
      img: req.body.img,
      title: req.body.title,
      price: req.body.price,
      info: req.body.info,
      total: req.body.total
    });
    await productObject.save();
    res.status(201).json(productObject)
  } catch (e) {
    errorHandler(res, e)
  }
};

