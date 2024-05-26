// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { mrTheme } from "../app/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={mrTheme}>
			<Head>
				<title>Marilyn Rifkin, LCSW</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
