const express = require('express');

const controller = require('..//controllers/usersController')

const userRoute = express.Router();


// Create user
userRoute.post('/signup',  controller.CreateUser)

// Signin user
userRoute.post('/login', controller.Login)

// Get items 
userRoute.get('/items',controller.getItems)


module.exports = userRoute