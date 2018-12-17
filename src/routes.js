import { Router } from 'express';

import swaggerSpec from './utils/swagger';
import linkRoutes from './routes/linkRoutes';
import tagRoutes from './routes/tagRoutes';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api/swagger.json
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/linky', linkRoutes);
router.use('/linky', tagRoutes);


export default router;
