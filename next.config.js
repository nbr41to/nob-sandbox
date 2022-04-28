/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		DATADOG_CLIENT_TOKEN: process.env.DATADOG_CLIENT_TOKEN,
		GO_BUILD_FLAGS: "-ldflags '-s -w'",
	},
};

module.exports = nextConfig;
