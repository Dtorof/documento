import { createUser, getUsers, getUserById, deleteUser, editUser } from '../controllers/users.controller.js';
import { Router } from 'express';
import multer  from 'multer'
const upload = multer()
export const usersRouter = Router();

usersRouter.get('/api/v1/users', getUsers);
usersRouter.get('/api/v1/users/:id', getUserById);
usersRouter.post('/api/v1/users',upload.none(), createUser);
usersRouter.put('/api/v1/users/:id',upload.none(), editUser);
usersRouter.delete('/api/v1/users/:id', deleteUser);
