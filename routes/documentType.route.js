import {getDocumentTypeById, getAllDocumentTypes, addDocumentType, updateDocumentType, deleteDocumentType } from '../controllers/documentType.controller.js';
import { Router } from 'express';
import multer  from 'multer'
const upload = multer()
export const documentTypeRouter = Router();

documentTypeRouter.get('/api/v1/document_type', getAllDocumentTypes);
documentTypeRouter.get('/api/v1/document_type/:id', getDocumentTypeById);
documentTypeRouter.post('/api/v1/document_type',upload.none(), addDocumentType);
documentTypeRouter.delete('/api/v1/document_type/:id', deleteDocumentType);
documentTypeRouter.put('/api/v1/document_type/:id',upload.none(), updateDocumentType);


