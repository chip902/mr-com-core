"use client";
import "./globals.css";
import { font } from "./font";
import "@fontsource-variable/quicksand";
import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import Navbar from "./NavBar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={font.quicksand.variable}>
			<body>
				<Providers>
					<Navbar />
					<Box as="main">{children}</Box>
				</Providers>
			</body>
		</html>
	);
}
