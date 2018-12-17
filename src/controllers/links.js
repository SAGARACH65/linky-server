import * as linkService from '../services/links';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  const page = req.query.page;

  linkService
    .getAllLinks()
    .then(data => res.json([...data.models.splice(0,(page ) * 2)]))
    .catch(err => next(err));
}
