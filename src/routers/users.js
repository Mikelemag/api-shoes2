const express = require('express')
const router = express.Router()
const usersMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')

router.post(
    '/users',
    usersMiddleware.validateCreateUser,
    usersController.createUser
)

router.get(
    '/users',
    usersController.getUsers
)

router.put(
    '/users/:id',
    usersController.updateUser
)

router.delete(
    '/users/:id',
    usersController.deleteUser
)

module.exports = router;