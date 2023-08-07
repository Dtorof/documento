import { DocumentType } from "../models/documentType.model.js";

// Obtener por ID
export const getDocumentTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const documentType = await DocumentType.findByPk(id);
    if (!documentType) {
      return res.status(404).json({ message: "Document type not found." });
    }
    return res.json(documentType);
  } catch (error) {
    console.error("Error fetching document type by ID:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Obtener todos
export const getAllDocumentTypes = async (req, res) => {
  try {
    const documentTypes = await DocumentType.findAll();
    return res.json(documentTypes);
  } catch (error) {
    console.error("Error fetching all document types:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Agregar
export const addDocumentType = async (req, res) => {
  const { name } = req.body;
  try {
    const newDocumentType = await DocumentType.create({ name });
    return res.json(newDocumentType);
  } catch (error) {
    console.error("Error adding document type:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Editar
export const updateDocumentType = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const documentType = await DocumentType.findByPk(id);
    if (!documentType) {
      return res.status(404).json({ message: "Document type not found." });
    }
    await documentType.update({ name });
    return res.json(documentType);
  } catch (error) {
    console.error("Error updating document type:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Eliminar
export const deleteDocumentType = async (req, res) => {
  const { id } = req.params;
  try {
    const documentType = await DocumentType.findByPk(id);
    if (!documentType) {
      return res.status(404).json({ message: "Document type not found." });
    }
    await documentType.destroy();
    return res.json({ message: "Document type deleted successfully." });
  } catch (error) {
    console.error("Error deleting document type:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
