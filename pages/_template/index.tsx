import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Props = {};

const Template: NextPage<Props> = () => {
	const [state, setState] = useState();
	useEffect(() => {}, []);

	return (
		<div>
      <h1>Template</h1>
    </div>
	);
};

export default Template;
