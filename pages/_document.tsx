import { font } from "@/app/font";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Marilyn Rifkin, LCSW</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
					<link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<meta property="og:title" content="Marilyn Rifkin, LCSW" />
					<meta property="og:description" content="Psychotherapy, Psychoanalysis and Clinical Supervision" />
					<meta property="og:image" content="/og-image.jpg" />
					<meta property="og:url" content="https://marilynrifkin.com" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<body className={font.quicksand.variable}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
