
import Tags from '../models/tags';

/**
 * Get all tags.
 *
 * @returns {Promise}
 */
export function getAllTags() {

  return Tags.where({})
    .orderBy('created_at', 'ASC')
    .fetchAll();
}
