const { Router } = require('express')
const userController = require('../controllers/userController')


const route = Router()
route.post('/', userController.create);

module.exports = route