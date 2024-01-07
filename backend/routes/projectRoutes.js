import express from 'express';
import { getAllProjects } from '../controllers/projectsControllers.js';

const projectRouter = express.Router();

projectRouter.get('/api', getAllProjects);

export default projectRouter;
