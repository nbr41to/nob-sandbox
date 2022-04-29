import { FC, ReactNode } from 'react';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className='rounded bg-indigo-500 py-2 px-4 font-bold text-white hover:bg-indigo-700'>
      {children}
    </button>
  );
};
