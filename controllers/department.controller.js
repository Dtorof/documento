import Department from "../models/department.model.js";

// Obtener todos los departamentos
async function getAllDepartments(req, res) {
  try {
    const departments = await Department.findAll();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los departamentos." });
  }
}

// Obtener un departamento por su ID
async function getDepartmentById(req, res) {
  const { id } = req.params;
  try {
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Departamento no encontrado." });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el departamento." });
  }
}

// Crear un nuevo departamento
async function createDepartment(req, res) {
  const { name } = req.body;
  try {
    const department = await Department.create({ name });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el departamento." });
  }
}

// Editar un departamento por su ID
async function updateDepartment(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Departamento no encontrado." });
    }
    await department.update({ name });
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el departamento." });
  }
}

// Eliminar un departamento por su ID
async function deleteDepartment(req, res) {
  const { id } = req.params;
  try {
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Departamento no encontrado." });
    }
    await department.destroy();
    res.json({ message: "Departamento eliminado correctamente." });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el departamento." });
  }
}

export { getAllDepartments, getDepartmentById, createDepartment, updateDepartment, deleteDepartment };
