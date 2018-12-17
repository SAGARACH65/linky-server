import * as tagService from '../services/tags';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  tagService
    .getAllTags()
    .then(data => res.json([ ...data.models] ))
    .catch(err => next(err));
}

