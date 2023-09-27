const express = require('express')
const userController = require('../controllers/userController')

const userRoute = express.Router()

userRoute.post('/signup',userController.signUp)
userRoute.post('/login',userController.login)
userRoute.get('/product',userController.getItems)
userRoute.get('/users',userController.getUser)

module.exports = userRoute