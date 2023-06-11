import { client } from '../client';
import { groq } from "next-sanity";

import HomeComponent from '../Components/HomeComponent';

export default async function Home() {
  const haikuQuery = groq`*[_type == 'haiku' && id == 000000]{haiku}`;
  const res = await client.fetch(haikuQuery);
  const { haiku } = res[0];

  return (
    <main className="flex flex-col justify-between h-screen w-screen p-4 sm:p-10">
      <HomeComponent haiku={haiku} />
    </main >
  )
}
