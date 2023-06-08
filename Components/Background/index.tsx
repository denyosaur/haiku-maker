import Image from "next/image";

import BackgroundImage from '../../public/BackgroundImage.jpg';

const Background: React.FC = () => {
  return (
    <div className="absolute top-0 right-0 h-full w-full z-[-1]">
      <Image
        alt="background image"
        className="object-cover sm:object-left z-[-1] rounded-3xl"
        src={BackgroundImage}
        fill
      />
    </div>
  )
}

export default Background;
