import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Newsletter - Xavier Aymeric Frey",
	description:
		"Inscrivez-vous à la newsletter de Xavier Aymeric Frey pour recevoir les dernières actualités, événements et sorties littéraires.",
};

export default function NewsletterLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
