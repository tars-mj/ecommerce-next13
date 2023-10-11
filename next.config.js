/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	typedRoutes: true,
	// },
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img01.ztat.net",
				port: "",
				pathname: "/article/spp-media-p1/**",
			},
		],
	},
};

module.exports = nextConfig;
