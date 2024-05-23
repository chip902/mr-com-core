"use client";
import { font } from "./font";
import "@fontsource-variable/quicksand";
import "./globals.css";
import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import Navbar from "./NavBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={font.quicksand.variable}>
			<body>
				<Providers>
					<Navbar />
					<Box as="main" mt="80px">
						{children}
					</Box>
				</Providers>
			</body>
		</html>
	);
}
