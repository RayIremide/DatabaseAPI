const UserModel = require('../models/users');
const itemModel = require('../models/product')
require('dotenv').config();


const CreateUser = async (req, res) => {
    const newUser = req.body;

    const existingUser = await UserModel.findOne({
        email: newUser.email
    });

    if (existingUser) {
        return res.status(409).json({
            message: 'User already exists',
        });
    }

    // Create a new user only if no existing user is found
    const user = await UserModel.create(newUser);

    return res.status(201).json({
        message: 'User created successfully',
        user
    });
}; 





const Login = async (req, res) => {
    const {email, password} = req.body

    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        }) 
    }

    if (user.password !== password) {
        return res.status(422).json({ message: 'Email or password is not correct' });
      }


    return res.status(200).json({
        message: 'Login successful',
        user
    })

}

// Get List of Items
const getItems= async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error });
  }
};


module.exports = {
    CreateUser,
    Login,
    getItems
}