const express = require('express')
const controller = require('../controllers/product')
const passport = require('passport')
const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getOne)
// router.post('/', passport.authenticate('jwt', {session: false}), controller.create)

module.exports = router