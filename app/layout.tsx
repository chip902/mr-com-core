import ClientLayout from "./ClientLayout";
import Footer from "./Footer";
import Navbar from "./NavBar";
import ServerLayout from "./server-layout";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ServerLayout>
			<ClientLayout>
				<nav>
					<Navbar />
				</nav>
				{children}
				<GoogleTagManager gtmId="GTM-NCGDKWPN" />
				<footer>
					<Footer />
				</footer>
			</ClientLayout>
		</ServerLayout>
	);
}
