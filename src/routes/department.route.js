import {
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment
  } from '../controllers/department.controller.js'; // Make sure you have the corresponding department controller file
  import { Router } from 'express';
  import multer from 'multer';
  const upload = multer();
  
  export const departmentRouter = Router();
  
  departmentRouter.get('/api/v1/departments', getAllDepartments);
  departmentRouter.get('/api/v1/departments/:id', getDepartmentById);
  departmentRouter.post('/api/v1/departments', upload.none(), createDepartment);
  departmentRouter.put('/api/v1/departments/:id', upload.none(), updateDepartment);
  departmentRouter.delete('/api/v1/departments/:id', deleteDepartment);
  