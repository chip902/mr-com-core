// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { mrTheme } from "../app/theme";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={mrTheme}>
			<Head>
				<title>Marilyn Rifkin, LCSW</title>
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
			</Head>
			<Script
				src="https://member.psychologytoday.com/verified-seal.js"
				async
				strategy="worker"
				data-badge="13"
				data-id="384337"
				data-code="aHR0cHM6Ly93d3cucHN5Y2hvb2d5dG9kYXkuY29tL2FwaS92ZXJpZmllZC1zZWFsL3NlYWxzL1tCQUQyRV0vcHJvZmlsZS9bUFJPX0ZJRUxfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
			/>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
