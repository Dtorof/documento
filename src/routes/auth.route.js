import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    login
 } from '../controllers/auth.controller.js'

 export const loginRouter = Router()

 loginRouter.post('/', upload.none(), login);



