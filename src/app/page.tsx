'use client';
import { useState } from 'react';

type somedata = {
  somenumber: number;
};

interface SomeName {
  somename: string;
}

export default function Home() {
  const [myNumber, setMyNumber] = useState(0);
  const myNewNumber: somedata = { somenumber: 10 };
  const myName: SomeName = { somename: 'artuso' };
  const testvariable = 0;

  const decreaseNumber = () => {
    setMyNumber((prev) => prev - 1);
  };
  const increaseNumber = () => {
    setMyNumber((prev) => prev + 1);
  };

  const myNewVariable: string = 'It should work';
  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly p-24'>
      <div className='flex items-center gap-x-2'>
        {' '}
        <p>My Variable:{myNewNumber.somenumber}</p>
        <p>My Name: {myName.somename}</p>
        <p>{myNewVariable}</p>
      </div>

      <h1 className='bg-amber-800 p-2 text-2xl text-slate-50'>
        This is the first test with husky,eslint and prettier
      </h1>
      <h2 className='font-semi-bold text-xl text-amber-800 underline'>
        This is a simple counter.
      </h2>
      <h3 className='text-xl text-fuchsia-800'>Extra Text to check</h3>
      <div className='flex  items-center gap-10'>
        <button
          onClick={decreaseNumber}
          className='rounded-md bg-amber-800 px-3 py-2 font-semibold text-slate-50'
        >
          -
        </button>
        <p className='text-xl font-semibold text-amber-800'>{myNumber}</p>
        <button
          onClick={increaseNumber}
          className='rounded-md bg-amber-800 px-3 py-2 font-semibold text-slate-50'
        >
          +
        </button>
      </div>
      <div>{testvariable}</div>
    </main>
  );
}
