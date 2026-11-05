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
    experience: collection({
      label: 'Esperienza',
      slugField: 'role',
      path: 'src/content/experience/*',
      schema: {
        role: fields.slug({ name: { label: 'Ruolo' } }),
        company: fields.text({ label: 'Azienda' }),
        location: fields.text({ label: 'Luogo' }),
        startDate: fields.text({ label: 'Data inizio (es. 2026-07)' }),
        endDate: fields.text({ label: 'Data fine (vuoto se in corso)' }),
        descriptionIt: fields.text({ label: 'Descrizione (IT)', multiline: true }),
        descriptionEn: fields.text({ label: 'Descrizione (EN)', multiline: true }),
      },
    }),
  },
});