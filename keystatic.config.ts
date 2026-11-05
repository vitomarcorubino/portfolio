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
    education: collection({
      label: 'Formazione',
      slugField: 'degree',
      path: 'src/content/education/*',
      schema: {
        degree: fields.slug({ name: { label: 'Titolo di studio' } }),
        institution: fields.text({ label: 'Istituto' }),
        location: fields.text({ label: 'Luogo' }),
        startDate: fields.text({ label: 'Data inizio (AAAA-MM)' }),
        endDate: fields.text({ label: 'Data fine (AAAA-MM)' }),
        grade: fields.text({ label: 'Voto' }),
        thesis: fields.text({ label: 'Titolo della tesi' }),
      },
    }),

    projects: collection({
      label: 'Progetti',
      slugField: 'title',
      path: 'src/content/projects/*',
      schema: {
        title: fields.slug({ name: { label: 'Titolo' } }),
        period: fields.text({ label: 'Periodo (es. Dic 2025 – Feb 2026)' }),
        metric: fields.text({ label: 'Metrica in evidenza (es. 98.7% mAP)' }),
        stack: fields.text({ label: 'Stack (separato da virgole)' }),
        summaryIt: fields.text({ label: 'Descrizione (IT)', multiline: true }),
        summaryEn: fields.text({ label: 'Descrizione (EN)', multiline: true }),
        repo: fields.text({ label: 'Link repository (opzionale)' }),
        paper: fields.text({ label: 'Link paper o presentazione (opzionale)' }),
        featured: fields.checkbox({ label: 'In evidenza in home', defaultValue: false }),
        order: fields.integer({ label: 'Ordine in home (1 = primo)', defaultValue: 0 }),
      },
    }),
  },
});