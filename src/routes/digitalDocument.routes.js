import {
    getAllDocuments,
    getDocumentById,
    createDocument,
    deleteDocument,
    updateDocument
  } from '../controllers/digitalDocument.controller.js';
  import { Router } from 'express';
  import multer from 'multer';
  
  const upload = multer();
  export const digitalDocumentsRouter = Router();
  
  digitalDocumentsRouter.get('/api/v1/digitalDocuments', getAllDocuments);
  digitalDocumentsRouter.get('/api/v1/digitalDocuments/:id', getDocumentById);
  digitalDocumentsRouter.post('/api/v1/digitalDocuments', upload.none(), createDocument);
  digitalDocumentsRouter.put('/api/v1/digitalDocuments/:id', upload.none(), updateDocument);
  digitalDocumentsRouter.delete('/api/v1/digitalDocuments/:id', deleteDocument);
  