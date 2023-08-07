import {
    getAllTickets,
    getTicketById,
    createTicket,
    deleteTicket,
    updateTicket
  } from '../controllers/ticket.controller.js';
  import { Router } from 'express';
  import multer from 'multer';
  
  const upload = multer();
  export const ticketsRouter = Router();
  
  ticketsRouter.get('/api/v1/tickets', getAllTickets);
  ticketsRouter.get('/api/v1/tickets/:id', getTicketById);
  ticketsRouter.post('/api/v1/tickets', upload.none(), createTicket);
  ticketsRouter.put('/api/v1/tickets/:id', upload.none(), updateTicket);
  ticketsRouter.delete('/api/v1/tickets/:id', deleteTicket);
  