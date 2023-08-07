import {
    getStatuses,
    getStatusById,
    createStatus,
    editStatus,
    deleteStatus
  } from '../controllers/status.controller.js'; // Make sure you have the corresponding status controller file
  import { Router } from 'express';
  import multer  from 'multer'
  const upload = multer()
  export const statusRouter = Router();
  
  statusRouter.get('/api/v1/status', getStatuses);
  statusRouter.get('/api/v1/status/:id', getStatusById);
  statusRouter.post('/api/v1/status',upload.none(), createStatus);
  statusRouter.put('/api/v1/status/:id',upload.none(), editStatus);
  statusRouter.delete('/api/v1/status/:id', deleteStatus);
  