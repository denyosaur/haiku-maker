import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'haiku',
  title: 'Haiku',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'haiku',
      title: 'Haiku',
      type: 'text',
    }),
  ],
})
