const express = require('express')
const userRouter = require('./routers/userRouter')
require('dotenv').config()

const app = express()
const PORT =process.env.PORT
app.use(express.json())


app.use('/api',userRouter)

app.get('/',(req,res)=>{
    res.send('Welcome to my Sequelize DB APP')
})


app.listen(PORT,()=>{
    console.log("Server started successfully")
})