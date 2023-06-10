import HaikuComponent from '../../Components/HaikuComponent';
import Seperator from '../Seperator';

const HaikuHeader: React.FC<Haiku> = ({ haiku }) => (
  <div className="flex flex-col items-center w-full h-52 mt-10">
    <h1 className="text-3xl mb-8 font-semibold">HaikuMaker</h1>
    <HaikuComponent haiku={haiku} isHeader />
    <Seperator />
  </div>
)

export default HaikuHeader;

interface Haiku {
  haiku: string
}
