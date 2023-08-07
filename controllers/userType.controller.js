import UserType from "../models/userType.model.js";

// Obtener todos los tipos de usuario
async function getAllUserTypes(req, res) {
  try {
    const userTypes = await UserType.findAll();
    res.json(userTypes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los tipos de usuario." });
  }
}

// Obtener un tipo de usuario por su ID
async function getUserTypeById(req, res) {
  const { id } = req.params;
  try {
    const userType = await UserType.findByPk(id);
    if (!userType) {
      return res.status(404).json({ message: "Tipo de usuario no encontrado." });
    }
    res.json(userType);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el tipo de usuario." });
  }
}

// Crear un nuevo tipo de usuario
async function createUserType(req, res) {
  const { name } = req.body;
  try {
    const userType = await UserType.create({ name });
    res.json(userType);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el tipo de usuario." });
  }
}

// Editar un tipo de usuario por su ID
async function updateUserType(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const userType = await UserType.findByPk(id);
    if (!userType) {
      return res.status(404).json({ message: "Tipo de usuario no encontrado." });
    }
    await userType.update({ name });
    res.json(userType);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el tipo de usuario." });
  }
}

// Eliminar un tipo de usuario por su ID
async function deleteUserType(req, res) {
  const { id } = req.params;
  try {
    const userType = await UserType.findByPk(id);
    if (!userType) {
      return res.status(404).json({ message: "Tipo de usuario no encontrado." });
    }
    await userType.destroy();
    res.json({ message: "Tipo de usuario eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el tipo de usuario." });
  }
}

export { getAllUserTypes, getUserTypeById, createUserType, updateUserType, deleteUserType };
