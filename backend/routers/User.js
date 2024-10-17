import express from 'express'
import { createUser, Login } from '../controllers/User.js'


const router = express.Router()

router.post('/login',createUser)
router.post('/register',Login)

export default router