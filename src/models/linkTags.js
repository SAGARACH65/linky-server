import bookshelf from '../db';

const TABLE_NAME = 'link_tags';

/**
 * linkTags model.
 */
class LinkTags extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default LinkTags;
