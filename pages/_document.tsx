// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { font } from "@/app/font";
import Script from "next/script";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" type="image/ico" sizes="32x32" />
					<link rel="icon" href="/favicon.ico" type="image/ico" sizes="16x16" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<meta property="og:title" content="Marilyn Rifkin, LCSW" />
					<meta property="og:description" content="Psychotherapy, Psychoanalysis and Clinical Supervision" />
					<meta property="og:image" content="/profile-photo.jpg" />
					<meta property="og:url" content="https://marilynrifkin.com" />
					<meta name="twitter:card" content="summary_large_image" />
					<Script
						src="https://member.psychologytoday.com/verified-seal.js"
						data-badge="13"
						data-id="384337"
						data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
					/>
				</Head>
				<body className={font.roboto.variable}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
