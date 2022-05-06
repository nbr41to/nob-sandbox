import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getStripe } from './_utils';

type Props = {};

const StripeCheckout: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  const submit = async () => {
    const response = await fetch('/api/stripe/checkout-sessions', {
      method: 'POST',
    });
    console.log(response);
    const session = await response.json();
    console.log(session);

    /* Stripeのページへ */
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: session.id,
    });
    console.warn(error.message);
  };

  return (
    <div>
      <h1>StripeCheckout</h1>
      <hr />
      <button className='btn' onClick={submit}>
        買う
      </button>
    </div>
  );
};

export default StripeCheckout;
