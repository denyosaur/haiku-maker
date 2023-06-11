import React, { FunctionComponent } from 'react';

import Background from '../Background';

const Frame: FunctionComponent<Children> = ({ children }) => (
  <div className="flex justify-end relative h-full w-full rounded-3xl">
    <div className="flex flex-col items-center h-full w-[75vw] sm:w-[60vw] bg-rose-50 rounded-r-3xl p-4 sm:p-9">
      {children}
    </div>
    <Background />
  </div>
);


export default Frame;

type Children = {
  children: React.ReactNode,
}
