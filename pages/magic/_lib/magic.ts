import { Magic } from 'magic-sdk';

const API_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY || '';

export const magic: Magic | undefined =
  typeof window !== 'undefined'
    ? new Magic(API_KEY, {
        locale: 'ja',
      })
    : undefined;
