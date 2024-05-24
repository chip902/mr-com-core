"use client";
import "./globals.css";
import { font } from "./font";
import "@fontsource-variable/quicksand";
import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={font.quicksand.variable}>
			<head>
				<script
					async
					type="text/javascript"
					src="https://member.psychologytoday.com/verified-seal.js"
					data-badge="13"
					data-id="384337"
					data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
				/>
			</head>
			<body>
				<Providers>
					<Navbar />
					<Box as="main">{children}</Box>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
