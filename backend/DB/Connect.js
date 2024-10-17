import mongoose from "mongoose";


export const ConnectDB = async (req,res)=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected ${connect.connection.host}`)
                
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}