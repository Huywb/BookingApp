import User from "../models/User.js"
import bcrypt from 'bcrypt'


export const createUser = async(req,res)=>{
    try {
        const {username,email, password} = req.body

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email || !password ||!username){
            return res.status(400).json({message: "Email or password or username are required"})
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Email is not correct" });
        }

        const Salt = await bcrypt.genSalt(10)
        const Hashpass = await bcrypt.hash(password,Salt)
        
        const newUser = await User.create({
            username,
            email,
            password: Hashpass
        })

        res.status(200).json(newUser)

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
}

export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password) {
            return res.status(400).json({message: "Email and Password are required"})
        }

        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(400).json({message:"Email or Password not correct"})
        }
        const Checkpass = await bcrypt.compare(password,findUser.password)
        if(!Checkpass){
            return res.status(400).json({message: "Password not correct"})
        }

        res.status(200).json(findUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
}

