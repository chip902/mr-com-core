import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { mrTheme } from "../app/theme";
import Layout from "../app/ClientLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={mrTheme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
