import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import MetaMaskOnboarding from "@metamask/onboarding";

type Props = {};

const Ethers: NextPage<Props> = () => {
	// const metaMaskOnboarding = useRef<MetaMaskOnboarding>();
	const [state, setState] = useState();

	/* これがなんのためにあるのかわからん */
	const onboarding = useRef<MetaMaskOnboarding>();
	useEffect(
		() => {
			if (!onboarding.current) {
				onboarding.current = new MetaMaskOnboarding();
			}
		},
		[],
	);

	const connectWallet = async () => {
		/* metamaskのinstallフラグ1 */
		if (typeof (window as any).ethereum !== "undefined") {
			console.log("MetaMask is installed!");
		}
		/* metamaskのinstallフラグ2 */
		if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
			if (!window.confirm("MetaMaskがInstallされていません。MetaMaskをInstallしますか？")) {
				return;
			}
			window.open("https://metamask.io/download", "_blank");
			return;
		}

		/* 接続 */
		const provider = new ethers.providers.Web3Provider((window as any).ethereum);
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner();
		console.log(signer);
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
