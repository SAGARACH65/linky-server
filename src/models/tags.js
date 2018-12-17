import bookshelf from '../db';

const TABLE_NAME = 'tags';

/**
 * User model.
 */
class Tags extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Tags;
