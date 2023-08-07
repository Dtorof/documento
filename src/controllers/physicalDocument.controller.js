import PhysicalDocument from '../models/physicalDocument.model.js';
import User from '../models/users.model.js';
import Status from '../models/status.model.js';

// Get all physical documents
export const getAllDocuments = async (req, res) => {
    try {
      const documents = await PhysicalDocument.findAll({
        include: [
          { model: User, as: 'documentUser' },
          { model: Status, as: 'physicalDocumentStatus' }
        ]
      });
      res.json(documents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

// Get a physical document by ID
export const getDocumentById = async (req, res) => {
    const id = req.params.id;
    try {
      const document = await PhysicalDocument.findOne({
        where: { id },
        include: [
          { model: User, as: 'documentUser' },
          { model: Status, as: 'physicalDocumentStatus' }
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

// Create a new physical document
export const createDocument = async (req, res) => {
  try {
    const newDocument = await PhysicalDocument.create(req.body);
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ message: "Error creating the document", error });
  }
};

// Update a physical document by ID
export const updateDocument = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedRows = await PhysicalDocument.update(req.body, {
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

// Delete a physical document by ID
export const deleteDocument = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRows = await PhysicalDocument.destroy({
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
