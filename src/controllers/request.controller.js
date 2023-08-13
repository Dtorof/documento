import Request from '../models/request.model.js';
import User from '../models/users.model.js';
import DigitalDocument from '../models/digitalDocument.model.js';
import PhysicalDocument from '../models/physicalDocument.model.js';

// Get all requests
export const getAllRequests = async (req, res) => {
    try {
      const requests = await Request.findAll({
        include: [
          { model: User, as: 'requestUser' },
          { model: DigitalDocument, as: 'digitalDocumentRequest' },
          { model: PhysicalDocument, as: 'physicalDocumentRequest' }
        ]
      });
      res.json(requests);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get a request by ID
export const getRequestById = async (req, res) => {
    const id = req.params.id;
    try {
      const request = await Request.findOne({
        where: { id },
        include: [
          { model: User, as: 'requestUser' },
          { model: DigitalDocument, as: 'digitalDocumentRequest' },
          { model: PhysicalDocument, as: 'physicalDocumentRequest' }
        ]
      });
      if (!request) {
        return res.status(404).json({ message: 'Request not found' });
      }
      res.json(request);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Create a new request
export const createRequest = async (req, res) => {
    try {
        const { userId, digitalDocumentId, physicalDocumentId } = req.body;

        // Ensure only one document type is provided
        if (digitalDocumentId && physicalDocumentId) {
            return res.status(400).json({ message: 'Please provide only one type of document.' });
        }

        if (!digitalDocumentId && !physicalDocumentId) {
            return res.status(400).json({ message: 'Please provide a digital or physical document ID.' });
        }

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        let documentName = '';
        if (digitalDocumentId) {
            const digitalDocument = await DigitalDocument.findByPk(digitalDocumentId);
            if (!digitalDocument) {
                return res.status(404).json({ message: 'Digital document not found.' });
            }
            documentName = digitalDocument.name;
        } else if (physicalDocumentId) {
            const physicalDocument = await PhysicalDocument.findByPk(physicalDocumentId);
            if (!physicalDocument) {
                return res.status(404).json({ message: 'Physical document not found.' });
            }
            documentName = physicalDocument.name;
        }

        const newRequest = await Request.create({
            userId,
            digitalDocumentId,
            physicalDocumentId,
        });

        res.status(201).json({
            requestId: newRequest.id,
            userName: user.userName,  // Assuming `userName` is a field in the User model
            documentName,
            type: digitalDocumentId ? 'digital' : 'physical'
        });

    } catch (error) {
        res.status(500).json({ message: "Error creating the request", error });
    }
};

// Update a request by ID
export const updateRequest = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedRows = await Request.update(req.body, {
      where: { id: id }
    });
    if (updatedRows[0]) {
      res.json({ message: `Request with ID ${id} updated successfully` });
    } else {
      res.status(404).json({ message: `Request with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating the request", error });
  }
};

// Delete a request by ID
export const deleteRequest = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRows = await Request.destroy({
      where: { id: id }
    });
    if (deletedRows) {
      res.json({ message: `Request with ID ${id} deleted successfully` });
    } else {
      res.status(404).json({ message: `Request with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting the request", error });
  }
};
