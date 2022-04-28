// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { WebClient } from '@slack/web-api';

const client = new WebClient(process.env.SLACK_USER_OAUTH_TOKEN);
type Data = { name: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const result = await client.chat.postMessage({
    channel: '#test_slack_api',
    text: `Hello!`,
  });
  console.log(result);
  res.end();
}
