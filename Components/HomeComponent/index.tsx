'use client'

import React, { useState } from 'react';

import FormInputs from '../FormInputs';
import Frame from '../Frame';
import HaikuHeader from '../HaikuHeader';

const HomeComponent: React.FC<HomeComponent> = ({ haiku }) => {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  return (
    <Frame>
      <div className={fadeOut ? "h-full transition-opacity ease-out duration-700 opacity-0" : "h-full opacity-100 w-full"}>
        <HaikuHeader haiku={haiku} />
        <FormInputs setFadeOut={setFadeOut} />
      </div>
    </Frame>
  )
}

export default HomeComponent;

interface HomeComponent {
  haiku: string,
}
