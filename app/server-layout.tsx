import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Marilyn Rifkin, LCSW",
	description: "Psychotherapy, Psychoanalysis and Clinical Supervision",
	icons: {
		shortcut: { url: "/favicon.ico", type: "image/ico" },
	},
};

const ServerLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GoogleTagManager gtmId="GTM-NCGDKWPN" />
			{children}
		</>
	);
};

export default ServerLayout;
