import Iron from '@hapi/iron';
import { NextApiRequest, NextApiResponse } from 'next';
import { CookieService } from 'pages/magic/_lib/cookie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let user;
  try {
    user = await Iron.unseal(
      CookieService.getAuthToken(req.cookies),
      process.env.MAGIC_ENCRYPTION_SECRET || '',
      Iron.defaults,
    );
  } catch (error) {
    res.status(401).end();
  }

  res.json(user);
}
