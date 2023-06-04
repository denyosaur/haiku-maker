import Image from 'next/image'

import Background from '../Components/Background';
import HomePage from '../Components/HomePage';

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen w-screen p-10">
      <div className="flex justify-end relative h-full w-full rounded-3xl">
        <div className="flex justify-around items-center h-full w-[60vw] bg-rose-50 right-0 rounded-r-3xl">
          <HomePage />
        </div>
        <Background />
      </div>
    </main>
  )
}
