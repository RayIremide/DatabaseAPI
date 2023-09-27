const express =require('express')
const mongoDB = require('./mongoDB')
require('dotenv').config()

const userRoute = require('./Router/userRouter')



const app = express()
const PORT =process.env.PORT

// Connecting to mongoDB server
mongoDB.connectToMongoDB()

app.use(express.json())
  


app.use('/api',userRoute)




app.get('/',(req,res)=>{
    res.send('This is the HomePage')
})



app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})