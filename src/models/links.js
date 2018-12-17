import bookshelf from '../db';

const TABLE_NAME = 'links';

/**
 * User model.
 */
class Links extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Links;
