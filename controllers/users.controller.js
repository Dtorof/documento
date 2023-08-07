import { User } from '../models/users.model.js';

export const getUsers = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.json(userList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      cellphone,
      dateOfBirth,
      gender,
      documentType,
      status,
      documentNumber,
      password,
      userName,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !cellphone ||
      !dateOfBirth ||
      !gender ||
      !documentType ||
      !status ||
      !documentNumber ||
      !password ||
      !userName
    ) {
      return res.status(400).json({ error: 'One or more fields are empty' });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      cellphone,
      dateOfBirth,
      gender,
      documentType,
      status,
      documentNumber,
      password,
      userName,
    });

    res.status(200).json({ message: 'User was created successfully', newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(200).json({ message: `User with id:${id} was successfully removed` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const editUser = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      firstName,
      lastName,
      email,
      cellphone,
      dateOfBirth,
      gender,
      documentType,
      status,
      documentNumber,
      password,
      userName,
    } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.cellphone = cellphone;
    user.dateOfBirth = dateOfBirth;
    user.gender = gender;
    user.documentType = documentType;
    user.status = status;
    user.documentNumber = documentNumber;
    user.password = password;
    user.userName = userName;

    await user.save();

    res.status(200).json({ message: `User with id:${id} was successfully edited`, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
