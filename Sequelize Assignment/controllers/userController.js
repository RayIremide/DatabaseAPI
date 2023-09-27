const db = require('../models/index')
const allUsers = require('../models/user')
const Items = require ('../models/product')



// SIGN UP FUNCTION
async function signUp(req, res, next) {
    try {
        const newUser = req.body;

        const existingUser = await allUsers.findOne({
            where: {
                email: newUser.email
            }
        });

        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists',
            });
        }

        // Create a new user only if no existing user is found
        const user = await allUsers.create(newUser);

        return res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        // Handle errors here, e.g., log the error and send an error response
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error',
        });
    }
}



// LOGIN FUNCTION
const login = async(req,res)=>{
    const{email,password} = req.body

    try{
        const user = await allUsers.findOne({where:{email}})
        if(!user){
            res.status(404).json({
                message:"User not found, Please sign up"
            })
        }
        // Validate Password

        const validPassword = await user.findOne({where:{password}})
        if(!validPassword){
            res.status(404).json({
                message: 'Email or Password is incorrect'
            })
        }
    }

    catch(err){
        res.status(500).json(err)
    }
}

// Get all items
const getItems =async(req,res)=>{
    try{
        const item = await product.findAll()
        res.json(item)
    }
    catch (err){
        res.json(err)
    }
    }

// Get all users
const getUser =async(req,res)=>{
    try{
        const item = await allUsers.findAll()
        res.json(item)
    }
    catch (err){
        res.json(err)
    }
    }

module.exports ={
    signUp,
    login,
    getItems,
    getUser
}