import { Router } from 'express';

import * as tagController from '../controllers/tags';

const router = Router();

/**
 * GET /api/users
 */
router.get('/tags', tagController.fetchAll);

export default router;
