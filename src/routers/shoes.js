const express = require('express')
const router = express.Router()
// const usersMiddleware = require('../middlewares/users')
const shoesController = require('../controllers/shoes')
const { route } = require('./users')

router.post(
    '/shoes',
    shoesController.createShoes
)

router.get(
    '/shoes',
    shoesController.getAllShoes
)

router.delete(
    '/shoes/:id',
    shoesController.deleteShoes
    
)
router.put(
    '/shoes/:id',
    shoesController.updateShoes
)

module.exports = router;