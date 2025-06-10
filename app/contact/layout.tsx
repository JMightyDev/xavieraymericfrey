import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - Xavier Aymeric Frey",
	description:
		'Contactez Xavier Aymeric Frey, auteur de "Ombres sur le lac". Questions, séances de dédicace, rencontres littéraires.',
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
