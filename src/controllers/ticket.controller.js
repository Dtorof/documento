import Ticket from '../models/ticket.model.js';
import PhysicalDocument from '../models/physicalDocument.model.js';

// Get all tickets
export const getAllTickets = async (req, res) => {
    try {
      const tickets = await Ticket.findAll({
        include: [
          { model: PhysicalDocument, as: 'ticketPhysicalDocument' }
        ]
      });
      res.json(tickets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get a ticket by ID
export const getTicketById = async (req, res) => {
    const id = req.params.id;
    try {
      const ticket = await Ticket.findOne({
        where: { id },
        include: [
          { model: PhysicalDocument, as: 'ticketPhysicalDocument' }
        ]
      });
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found' });
      }
      res.json(ticket);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Error creating the ticket", error });
  }
};

// Update a ticket by ID
export const updateTicket = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedRows = await Ticket.update(req.body, {
      where: { id: id }
    });
    if (updatedRows[0]) {
      res.json({ message: `Ticket with ID ${id} updated successfully` });
    } else {
      res.status(404).json({ message: `Ticket with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating the ticket", error });
  }
};

// Delete a ticket by ID
export const deleteTicket = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRows = await Ticket.destroy({
      where: { id: id }
    });
    if (deletedRows) {
      res.json({ message: `Ticket with ID ${id} deleted successfully` });
    } else {
      res.status(404).json({ message: `Ticket with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting the ticket", error });
  }
};
