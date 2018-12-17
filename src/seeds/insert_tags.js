/**
 * Add data to the links table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('tags')
    .del()
    .then(() => {
      return knex('tags').insert([
        {
          tag: 'Javascript',
          updated_at: new Date()
        },
        {
          tag: 'Machine Learning',
          updated_at: new Date()
        },
        {
          tag: 'Football',
          updated_at: new Date()
        },
        {
          tag: 'Reading',
          updated_at: new Date()
        },
        {
          tag: 'Project Management',
          updated_at: new Date()
        },
        {
          tag: 'Agile',
          updated_at: new Date()
        },
        {
          tag: 'c#',
          updated_at: new Date()
        }

      ]);
    });
}
