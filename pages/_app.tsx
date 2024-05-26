import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { mrTheme } from "../app/theme";
import Layout from "../app/ClientLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={mrTheme}>
			<Head>
				<title>Marilyn Rifkin, LCSW</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
				<link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:title" content="Marilyn Rifkin, LCSW" />
				<meta property="og:description" content="Psychotherapy, Psychoanalysis and Clinical Supervision" />
				<meta property="og:image" content="/og-image.jpg" />
				<meta property="og:url" content="https://marilynrifkin.com" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
