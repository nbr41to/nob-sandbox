import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {};

const SlackApi: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  const request = async () => {
    await fetch('/api/slack/post');
  };
  return (
    <div>
      <h1>Slack API</h1>
      <button onClick={request}>request!!</button>
    </div>
  );
};

export default SlackApi;
