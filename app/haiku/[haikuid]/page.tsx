import Frame from '../../../Components/Frame';
import HaikuComponent from '../../../Components/HaikuComponent';


import { fetchHaiku } from '../../../lib/fetchHaiku';

export const revalidate = 21600;

const HaikuPage = async ({ params }: any) => {
  const haikuIdToUse = params.haikuid;
  const { haiku } = await fetchHaiku(haikuIdToUse);

  return (
    <main className="flex flex-col justify-between h-screen w-screen p-10">
      <Frame>
        <div className="flex justify-around items-center h-full w-full">
          <HaikuComponent haiku={haiku} isHeader={false} />
        </div>
      </Frame>
    </main >
  )
};

export default HaikuPage;
