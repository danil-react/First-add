const express = require('express')
const controller = require('../controllers/cart')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/', passport.authenticate('jwt', {session: false}), controller.postOne)
router.delete('/:userId/:id', passport.authenticate('jwt', {session: false}), controller.deleteOne)
router.put('/', passport.authenticate('jwt', {session: false}), controller.checkOut)

module.exports = router