import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';

type Props = {};

const Mantine: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Mantine</h1>
      <hr />
      <Button>Button</Button>
    </div>
  );
};

export default Mantine;
