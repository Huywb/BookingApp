import express from 'express'
import config from 'dotenv'
import bodyParser from 'body-parser'
import { ConnectDB } from './DB/Connect.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRoute from './routers/User.js'

config.config()
const app = express()
app.use(cookieParser)
app.use(bodyParser)
app.use(express.json({limit:'5mb'}))
app.use(cors())


app.use('/users',userRoute)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running ${process.env.PORT}`)
    ConnectDB()
})