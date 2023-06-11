import Link from 'next/link';

import Frame from '../../../Components/Frame';
import HaikuComponent from '../../../Components/HaikuComponent';

import { fetchHaiku } from '../../../lib/fetchHaiku';

export const revalidate = 21600;

const HaikuPage = async ({ params }: any) => {
  const haikuIdToUse = params.haikuid;
  const { haiku } = await fetchHaiku(haikuIdToUse);

  return (
    <main className="flex flex-col h-screen w-screen p-4 sm:p-10">
      <Frame>
        <div className="flex flex-col justify-start items-start h-full w-full">
          <Link
            className="h-10 transition duration-400 hover:opacity-70 underline underline-offset-1"
            href='/'
          >
            Go Back
          </Link>
          <div className="flex justify-around h-full w-full pb-10">
            <HaikuComponent haiku={haiku} isHeader={false} />
          </div>
        </div>
      </Frame>
    </main >
  )
};

export default HaikuPage;
