/**
 * Add data to the links table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('links')
    .del()
    .then(() => {
      return knex('links').insert([
        {
          title: 'linkA',
          url: 'https://www.youtube.com/watch?v=pKyU92cza0Y',
          image_url: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
          user_id: '10',
          created_by: 'Saugat Acharya',
          update_by: 'Abc Acharya',
          description: 'watch the coding train do some awsome work',
          updated_at: new Date()
        },

        {
          title: 'linkA',
          url: 'https://www.youtube.com/watch?v=pKyU92cza0Y',
          image_url: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
          user_id: '10',
          created_by: 'Saugat Acharya',
          update_by: 'Abc Acharya',
          description: 'watch the coding train do some awsome work',
          updated_at: new Date()
        },

        {
          title: 'linkA',
          url: 'https://www.youtube.com/watch?v=pKyU92cza0Y',
          image_url: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
          user_id: '10',
          created_by: 'Saugat Acharya',
          update_by: 'Abc Acharya',
          description: 'watch the coding train do some awsome work',
          updated_at: new Date()
        },

        {
          title: 'linkA',
          url: 'https://www.youtube.com/watch?v=pKyU92cza0Y',
          image_url: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
          user_id: '10',
          created_by: 'Saugat Acharya',
          update_by: 'Abc Acharya',
          description: 'watch the coding train do some awsome work',
          updated_at: new Date()
        },

        {
          title: 'linkA',
          url: 'https://www.youtube.com/watch?v=pKyU92cza0Y',
          image_url: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
          user_id: '10',
          created_by: 'Saugat Acharya',
          update_by: 'Abc Acharya',
          description: 'watch the coding train do some awsome work',
          updated_at: new Date()
        },

        {
          title: 'linkA',
          url: 'https://www.youtube.com/watch?v=pKyU92cza0Y',
          image_url: 'https://cdn-static-1.medium.com/_/fp/icons/favicon-rebrand-medium.3Y6xpZ-0FSdWDnPM3hSBIA.ico',
          user_id: '10',
          created_by: 'Saugat Acharya',
          update_by: 'Abc Acharya',
          description: 'watch the coding train do some awsome work',
          updated_at: new Date()
        },

      ]);
    });
}
