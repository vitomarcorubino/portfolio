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
        image: fields.text({ label: 'Immagine (es. /images/projects/road-damage.jpg)' }),
        live: fields.text({ label: 'Link demo o sito (opzionale)' }),
        featured: fields.checkbox({ label: 'In evidenza in home', defaultValue: false }),
        order: fields.integer({ label: 'Ordine in home (1 = primo)', defaultValue: 0 }),
      },
    }),

    publications: collection({
      label: 'Pubblicazioni',
      slugField: 'title',
      path: 'src/content/publications/*',
      schema: {
        title: fields.slug({ name: { label: 'Titolo' } }),
        authors: fields.text({ label: 'Autori (come nel paper)', multiline: true }),
        venue: fields.text({ label: 'Rivista o conferenza' }),
        volume: fields.text({ label: 'Volume (es. vol. 15735, opzionale)' }),
        pages: fields.text({ label: 'Pagine (es. 373–378)' }),
        editors: fields.text({ label: 'Curatori (opzionale)', multiline: true }),
        publisher: fields.text({ label: 'Editore (es. Springer Nature Switzerland, Cham)' }),
        isbn: fields.text({ label: 'ISBN (opzionale)' }),
        date: fields.text({ label: 'Data (AAAA-MM)' }),
        url: fields.text({ label: 'Link al paper (opzionale)' }),
      },
    }),

    prizes: collection({
      label: 'Premi',
      slugField: 'title',
      path: 'src/content/prizes/*',
      schema: {
        title: fields.slug({ name: { label: 'Titolo' } }),
        issuer: fields.text({ label: 'Ente che ha assegnato il premio' }),
        date: fields.text({ label: 'Data (AAAA-MM)' }),
        description: fields.text({ label: 'Descrizione (opzionale)', multiline: true }),
        url: fields.text({ label: 'Link (opzionale)' }),
      },
    }),

    certifications: collection({
      label: 'Certificazioni',
      slugField: 'title',
      path: 'src/content/certifications/*',
      schema: {
        title: fields.slug({ name: { label: 'Titolo' } }),
        issuer: fields.text({ label: 'Ente certificatore' }),
        date: fields.text({ label: 'Data (AAAA-MM)' }),
        credentialId: fields.text({ label: 'ID credenziale (opzionale)' }),
        url: fields.text({ label: 'Link alla credenziale (opzionale)' }),
      },
    }),

    references: collection({
      label: 'Referenze',
      slugField: 'name',
      path: 'src/content/references/*',
      schema: {
        name: fields.slug({ name: { label: 'Nome' } }),
        role: fields.text({ label: 'Ruolo o titolo (come su LinkedIn)' }),
        relationship: fields.text({ label: 'Rapporto (es. collega di università)' }),
        date: fields.text({ label: 'Data (AAAA-MM)' }),
        text: fields.text({ label: 'Testo della referenza (integrale)', multiline: true }),
        linkedinUrl: fields.text({ label: 'Profilo LinkedIn (opzionale)' }),
        avatar: fields.image({
          label: 'Foto profilo (quadrata, opzionale)',
          directory: 'public/images/references',
          publicPath: '/images/references/',
        }),
        order: fields.integer({ label: 'Ordine (1 = primo)', defaultValue: 0 }),
      },
    }),
  },
});