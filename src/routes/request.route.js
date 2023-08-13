import {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest
} from '../controllers/request.controller.js';
import { Router } from 'express';
import multer from 'multer';

const upload = multer();
export const requestsRouter = Router();

// Get all requests
requestsRouter.get('/api/v1/requests', getAllRequests);

// Get a request by ID
requestsRouter.get('/api/v1/requests/:id', getRequestById);

// Create a new request
requestsRouter.post('/api/v1/requests', upload.none(), createRequest);

// Update a request by ID
requestsRouter.put('/api/v1/requests/:id', upload.none(), updateRequest);

// Delete a request by ID
requestsRouter.delete('/api/v1/requests/:id', deleteRequest);
