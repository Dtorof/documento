import { Router } from 'express';

import {
  getAllUserTypes,
  getUserTypeById,
  createUserType,
  updateUserType,
  deleteUserType,
} from '../controllers/userType.controller.js';
import multer  from 'multer'
const upload = multer()
  export const usertypeRouter = Router();
  
  usertypeRouter.get('/api/v1/userType', getAllUserTypes);
  usertypeRouter.get('/api/v1/userType/:id', getUserTypeById);
  usertypeRouter.post('/api/v1/userType', upload.none(), createUserType);
  usertypeRouter.put('/api/v1/userType/:id', upload.none(), updateUserType);
  usertypeRouter.delete('/api/v1/userType/:id', deleteUserType);
  