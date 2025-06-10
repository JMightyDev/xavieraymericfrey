import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const { name, email, message } = await request.json();

		// Validation des données
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Tous les champs sont requis" },
				{ status: 400 }
			);
		}

		// Validation email basique
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: "Email invalide" }, { status: 400 });
		}

		// Envoi d'email avec Resend
		await resend.emails.send({
			from: "onboarding@resend.dev", // Domaine sandbox pour les tests
			to: "contact@jmighty.fr",
			subject: `Nouveau message de contact - ${name}`,
			html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
			replyTo: email,
		});

		return NextResponse.json(
			{ message: "Message envoyé avec succès" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Erreur lors de l'envoi du message:", error);
		return NextResponse.json(
			{ error: "Erreur lors de l'envoi du message" },
			{ status: 500 }
		);
	}
}
