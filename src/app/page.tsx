import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"></span>
      </div>
      <p className="">Writes upside-down</p>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>
  );
}
