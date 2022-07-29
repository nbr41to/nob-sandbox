import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { magic } from './_lib/magic';

type Props = {};

const MagicAuth: NextPage<Props> = () => {
  const [state, setState] = useState('');
  useEffect(() => {}, []);

  const submit = async () => {
    if (!magic) return;
    const did = await magic.auth.loginWithMagicLink({ email: state });
    console.log('did', did);
    const response = await fetch('/api/magic/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` },
    });

    console.log('response', response);
  };

  const getUser = async () => {
    const response = await fetch('/api/magic/user');
    const user = await response.json();
    console.log('user', user);
  };

  return (
    <div>
      <h1>Magic</h1>
      <hr />
      <input
        className='rounded-lg border border-gray-500 p-2'
        type='text'
        placeholder='Email'
        onChange={(e) => setState(e.target.value)}
      />
      <button className='btn' onClick={submit}>
        submit
      </button>
      <br />
      <button className='btn' onClick={getUser}>
        getUser
      </button>
    </div>
  );
};

export default MagicAuth;
