import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Highlight,
  Title,
} from '@mantine/core';
import { Input } from '@mantine/core';
type Props = {};

const Mantine: NextPage<Props> = () => {
  const [state, setState] = useState();
  const [input, setInput] = useState('this');
  useEffect(() => {}, []);

  return (
    <div>
      <Title order={1}>Mantine</Title>
      <Divider my='sm' />
      <div className='space-y-4'>
        <Anchor href='https://mantine.dev/' target='_blank'>
          Mantine docs
        </Anchor>
        <Checkbox label='I agree to sell my privacy' />
        <Input
          icon={'🦑'}
          placeholder='Your email'
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
        <Highlight highlight={input} highlightColor='lime'>
          Highlight This, definitely THIS and also this! Highlight
          This,definitely THIS and also this!
        </Highlight>
        <Button color='red'>Button</Button>
      </div>
    </div>
  );
};

export default Mantine;
