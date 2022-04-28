import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Props = {};

const SlackApi: NextPage<Props> = () => {
	const [state, setState] = useState();
	useEffect(() => {}, []);

	return (
		<div>
      <h1>Slack API</h1>
    </div>
	);
};

export default SlackApi;
