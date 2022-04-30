// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Magic } from '@magic-sdk/admin';
import Iron from '@hapi/iron';
import { CookieService } from 'pages/magic/_lib/cookie';

const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end();

  const did = magic.utils.parseAuthorizationHeader(
    req.headers.authorization || '',
  );
  const user = await magic.users.getMetadataByToken(did);
  console.log(user);

  const token = await Iron.seal(
    user,
    process.env.MAGIC_ENCRYPTION_SECRET || '',
    Iron.defaults,
  );
  CookieService.setTokenCookie(res, token);

  res.end();
}
