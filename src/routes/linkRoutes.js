import { Router } from 'express';

import * as linkController from '../controllers/links';

const router = Router();

/**
 * GET /api/users
 */
router.get('/links', linkController.fetchAll);

export default router;
