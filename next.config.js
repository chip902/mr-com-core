const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.cloudfront.net https://www.googletagmanager.com https://www.google-analytics.com https://member.psychologytoday.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: https://*.cloudflare.com https://*.google.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    connect-src 'self' https://www.google-analytics.com;
    upgrade-insecure-requests;
`;

module.exports = {
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value: cspHeader.replace(/\n/g, ""),
					},
				],
			},
		];
	},
};
