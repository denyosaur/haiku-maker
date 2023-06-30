import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, sanityToken } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: sanityToken,
})

export const writeToSanity = async (haiku: HaikuPost) => {
  try {
    const result = client.create(haiku).then(res => {
      return res.id
    });
    return result;
  } catch (err) {
    writeToSanity(haiku);
    throw err;
  }
};

interface HaikuPost {
  id: number,
  haiku: string,
  _type: string,
};
