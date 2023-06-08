import { ParsedUrlQuery } from "querystring";

import HaikuComponent from '../../../Components/HaikuComponent';
import { fetchHaiku } from '../../../lib/fetchHaiku';

const HaikuPage = async ({ params }: any) => {
  const haikuIdToUse = params.haikuid;
  const { haiku } = await fetchHaiku(haikuIdToUse);

  return (
    <div>
      <HaikuComponent haiku={haiku} />
    </div>
  )
};

export default HaikuPage;

interface Data {
  data: {
    id: number,
    haiku: string,
  }
};

interface DataProps {
  haiku: string,
  id: number,
}

interface Params extends ParsedUrlQuery {
  haikuId: string,
  id: string,
};
