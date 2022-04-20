import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { datadogLogs } from "@datadog/browser-logs";

/* 本来なら _app.tsx かな */
datadogLogs.init({
	clientToken: process.env.DATADOG_CLIENT_TOKEN || "",
	site: "localhost:3000",
	forwardErrorsToLogs: true,
});

const DataDog: NextPage = () => {
	const throwInfo = () => {
		console.log("こんにちは");
		datadogLogs.logger.info(
			"datadogLogs.logger.info",
			{ name: "test info", id: 123 },
		);
	};
	const throwError = () => {
		console.error("エラーです");
		datadogLogs.logger.error(
			"datadogLogs.logger.error",
			{ name: "test error", id: 123 },
		);
	};
	const throwDebug = () => {
		console.error("デバック用エラーです");
		datadogLogs.logger.debug(
			"datadogLogs.logger.debug",
			{ name: "test debug", id: 123 },
		);
	};

	return (
		<div>
      <h1>Datadog</h1>
      <div className='space-x-2'>
        <button className='btn' onClick={throwInfo}>
          throw info
        </button>
        <button className='btn' onClick={throwError}>
          throw error
        </button>
        <button className='btn' onClick={throwDebug}>
          throw debug
        </button>
      </div>
      <div></div>
    </div>
	);
};

export default DataDog;
