import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {};

const NodeCron: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  const start = async () => {
    await fetch('/api/cron/start');
  };
  const stop = async () => {
    await fetch('/api/cron/stop');
  };

  return (
    <div>
      <h1>node-cron</h1>
      <button className='btn' onClick={start}>
        start!!
      </button>
      <button className='btn' onClick={stop}>
        stop!!
      </button>
    </div>
  );
};

export default NodeCron;
