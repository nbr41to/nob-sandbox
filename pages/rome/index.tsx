import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {};

const Rome: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Rome</h1>
    </div>
  );
};

export default Rome;
