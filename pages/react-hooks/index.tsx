import type { NextPage } from 'next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MemoComponent, NormalComponent } from './_Components';

type Props = {};

const Template: NextPage<Props> = () => {
  const [count, setCount] = useState(0);

  const normalNumber = Math.random();

  const normalFuncNumber = () => {
    const number = Math.random();
    return number;
  };

  const useMemoNumber = useMemo(() => {
    const number = Math.random();
    return number;
  }, []);

  const useCallbackNumber = useCallback(() => {
    const number = Math.random();
    return number;
  }, []);

  useEffect(() => {}, []);

  console.log('render!!');

  return (
    <div>
      <h1>React Hooks</h1>
      <hr />
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>count up</button>
      <br />
      <br />
      <h3>Normal</h3>
      <div>{normalNumber}</div>
      <div>{normalFuncNumber()}</div>
      <br />
      <h3>useMemo</h3>
      <NormalComponent text={useMemoNumber} />
      <MemoComponent text={useMemoNumber} />
      <br />
      <h3>useCallback</h3>
      <NormalComponent func={useCallbackNumber} />
      <MemoComponent func={useCallbackNumber} />
    </div>
  );
};

export default Template;
