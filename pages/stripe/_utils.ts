import { loadStripe, Stripe } from '@stripe/stripe-js';

const API_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_API_KEY || '';
let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(API_KEY || '');
  }
  return stripePromise;
};
