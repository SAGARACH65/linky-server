/**
 * Add data to the links table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('link_tags')
    .del()
    .then(() => {
      return knex('link_tags').insert([
        {
          link_id: 1,
          tag_id: 1,
          updated_at: new Date()
        },
        {
          link_id: 1,
          tag_id: 2,
          updated_at: new Date()
        },
        {
          link_id: 1,
          tag_id: 3,
          updated_at: new Date()
        },
        {
          link_id: 2,
          tag_id: 4,
          updated_at: new Date()
        },
        {
          link_id: 2,
          tag_id: 5,
          updated_at: new Date()
        },
        {
          link_id: 2,
          tag_id: 6,
          updated_at: new Date()
        },
        {
          link_id: 2,
          tag_id: 7,
          updated_at: new Date()
        },
        {
          link_id: 3,
          tag_id: 4,
          updated_at: new Date()
        },
        {
          link_id: 4,
          tag_id: 5,
          updated_at: new Date()
        },
        {
          link_id: 5,
          tag_id: 6,
          updated_at: new Date()
        },
        {
          link_id: 6,
          tag_id: 7,
          updated_at: new Date()
        },
        {
          link_id: 6,
          tag_id: 1,
          updated_at: new Date()
        },
        {
          link_id: 6,
          tag_id: 4,
          updated_at: new Date()
        }
      ]);
    });
}
