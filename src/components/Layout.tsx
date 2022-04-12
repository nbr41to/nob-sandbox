import { FC } from 'react';

type Props = {};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='relative min-h-screen'>
      <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 text-center'>
        <p className='text-2xl font-bold text-white'>nob-sandbox</p>
      </header>
      <main className='py-4 px-8'>{children}</main>
      <footer className='absolute bottom-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center'>
        <small className='text-white'>2021 © nobuyukikobayashi</small>
      </footer>
    </div>
  );
};
