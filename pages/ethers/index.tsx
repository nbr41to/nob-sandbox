import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

type Props = {};

const Ethers: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  const connectWallet = async () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send('eth_requestAccounts', []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
  };

  return (
    <div>
      <h1>Ethers</h1>
      <button className='btn' onClick={connectWallet}>
        connectWallet
      </button>
    </div>
  );
};

export default Ethers;
