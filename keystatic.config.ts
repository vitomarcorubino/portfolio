import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Post',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titolo' } }),
        description: fields.text({ label: 'Descrizione', multiline: true }),
        date: fields.date({ label: 'Data' }),
        lang: fields.select({
          label: 'Lingua',
          options: [
            { label: 'Italiano', value: 'it' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'it',
        }),
        content: fields.mdx({ label: 'Contenuto' }),
      },
    }),
  },
});