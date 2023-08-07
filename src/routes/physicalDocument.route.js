import {
    getAllDocuments,
    getDocumentById,
    createDocument,
    deleteDocument,
    updateDocument
  } from '../controllers/physicalDocument.controller.js';
  import { Router } from 'express';
  import multer from 'multer';
  
  const upload = multer();
  export const physicalDocumentsRouter = Router();
  
  physicalDocumentsRouter.get('/api/v1/physicalDocuments', getAllDocuments);
  physicalDocumentsRouter.get('/api/v1/physicalDocuments/:id', getDocumentById);
  physicalDocumentsRouter.post('/api/v1/physicalDocuments', upload.none(), createDocument);
  physicalDocumentsRouter.put('/api/v1/physicalDocuments/:id', upload.none(), updateDocument);
  physicalDocumentsRouter.delete('/api/v1/physicalDocuments/:id', deleteDocument);
  