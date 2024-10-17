import { createPost, deletePost, getPost, updatePost } from '../controllers/Post.js'
import { createUser, Login } from '../controllers/User.js'
import express from 'express'


const router = express.Router()


router.post('/create',createPost)
router.put('/update/:id',updatePost)
router.delete('/delete/:id',deletePost)
router.get('/',getPost)

export default router