import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Marilyn Rifkin, LCSW",
	description: "Psychotherapy, Psychoanalysis and Clinical Supervision",
	icons: {
		shortcut: { url: "/icon.png", type: "image/png" },
	},
};

const ServerLayout = ({ children }: { children: React.ReactNode }) => {
	return <>{children}</>;
};

export default ServerLayout;
