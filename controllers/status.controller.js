import { Status } from '../models/status.model.js';

export const getStatuses = async (req, res) => {
  try {
    const statusList = await Status.findAll();
    res.json(statusList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getStatusById = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await Status.findByPk(id);
    if (!status) {
      return res.status(404).json({ message: 'Status not found' });
    }
    res.json(status);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createStatus = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name field is empty' });
    }

    const newStatus = await Status.create({ name });

    res.status(200).json({ message: 'Status was created successfully', newStatus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await Status.findByPk(id);
    if (!status) {
      return res.status(404).json({ message: 'Status not found' });
    }
    await status.destroy();
    res.status(200).json({ message: `Status with id:${id} was successfully removed` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const editStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const { name } = req.body;

    const status = await Status.findByPk(id);
    if (!status) {
      return res.status(404).json({ message: 'Status not found' });
    }

    status.name = name;
    await status.save();

    res.status(200).json({ message: `Status with id:${id} was successfully edited`, status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
