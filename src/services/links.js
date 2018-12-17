import Links from '../models/links';
import LinkTags from '../models/linkTags';

/**
 * Get all Links.
 *
 * @returns {Promise}
 */
export function getAllLinks() {

  return Links.where({})
    .orderBy('created_at', 'DESC')
    .fetchAll();
}
