'use client'
import { useEffect, useState } from 'react';

const HaikuComponent: React.FC<Haiku> = ({ haiku, isHeader = false }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const separateLines = haiku.split(/\r?\n|\r|\n/g);
  const baseCss = "flex flex-col justify-center items-center";

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  if (isHeader) {
    return (
      <div
        className={baseCss}
      >
        {separateLines.map((line, index) => {
          return <p key={`line-${index + 1}`}>{line}</p>
        })}
      </div>
    )
  }
  return (
    <div
      className={isLoaded ? `${baseCss} transition-opacity ease-out duration-700 opacity 100` : `${baseCss} opacity-0`}
    >
      {separateLines.map((line, index) => {
        return <p key={`line-${index + 1}`}>{line}</p>
      })}
    </div>
  )
}

export default HaikuComponent;

interface Haiku {
  haiku: string,
  isHeader: boolean,
}
