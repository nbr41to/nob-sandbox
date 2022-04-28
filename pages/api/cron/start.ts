// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { startSchedule } from './_utils';
type Data = { name: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  startSchedule();
  res.end();
}
