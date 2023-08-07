import DigitalDocument from '../models/digitalDocument.model.js';
import User from '../models/users.model.js';
import Status from '../models/status.model.js';
// Get all digital documents
export const getAllDocuments = async (req, res) => {
    try {
      const documents = await DigitalDocument.findAll({
        include: [
          { model: User, as: 'documentOwner' },
          { model: Status, as: 'documentStatus' }
        ]
      });
      res.json(documents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

// Get a digital document by ID
export const getDocumentById = async (req, res) => {
    const id = req.params.id;
    try {
      const document = await DigitalDocument.findOne({
        where: { id },
        include: [
          { model: User, as: 'documentOwner' },
          { model: Status, as: 'documentStatus' }
        ]
      });
      if (!document) {
        return res.status(404).json({ message: 'Document not found' });
      }
      res.json(document);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

// Create a new digital document
export const createDocument = async (req, res) => {
  try {
    const newDocument = await DigitalDocument.create(req.body);
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ message: "Error creating the document", error });
  }
};

// Update a digital document by ID
export const updateDocument = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedRows = await DigitalDocument.update(req.body, {
      where: { id: id }
    });
    if (updatedRows[0]) {
      res.json({ message: `Document with ID ${id} updated successfully` });
    } else {
      res.status(404).json({ message: `Document with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating the document", error });
  }
};

// Delete a digital document by ID
export const deleteDocument = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRows = await DigitalDocument.destroy({
      where: { id: id }
    });
    if (deletedRows) {
      res.json({ message: `Document with ID ${id} deleted successfully` });
    } else {
      res.status(404).json({ message: `Document with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting the document", error });
  }
};
