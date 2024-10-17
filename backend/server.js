import express from 'express'
import config from 'dotenv'
import bodyParser from 'body-parser'
import { ConnectDB } from './DB/Connect.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoute from './routers/User.js'
import postRoute from './routers/Post.js'
import cloudinary from 'cloudinary';

config.config()
const app = express()
app.use(cookieParser)
app.use(bodyParser)
app.use(express.json({limit:'5mb'}))
app.use(cors())
cloudinary.v2.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

app.use('/users',userRoute)
app.use('/posts',postRoute)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.PORT}`)
    ConnectDB()
})