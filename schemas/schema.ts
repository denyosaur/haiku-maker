import { type SchemaTypeDefinition } from 'sanity'

//import blockContent from './blockContent'
import haiku from './haiku'
// import post from './post'
import author from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, haiku],
}
