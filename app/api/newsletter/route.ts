import { NextRequest, NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || "4");

export async function POST(request: NextRequest) {
	try {
		const { email } = await request.json();

		if (!email || !email.includes("@")) {
			return NextResponse.json({ error: "Email invalide" }, { status: 400 });
		}

		// 1. Ajouter le contact à la liste Brevo
		const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"api-key": BREVO_API_KEY,
			},
			body: JSON.stringify({
				email: email,
				listIds: [BREVO_LIST_ID],
				updateEnabled: false,
			}),
		});

		let isNewSubscriber = true;
		let message =
			"Inscription réussie ! Vérifiez votre boîte email pour la confirmation.";

		if (brevoResponse.status === 400) {
			const errorData = await brevoResponse.json();
			if (
				errorData.message &&
				errorData.message.includes("Contact already exist")
			) {
				isNewSubscriber = false;
				message = "Vous êtes déjà inscrit(e) à notre newsletter !";
			}
		} else if (!brevoResponse.ok) {
			const errorData = await brevoResponse.json();
			console.error("Erreur Brevo:", errorData);
			return NextResponse.json(
				{ error: "Erreur lors de l'inscription. Veuillez réessayer." },
				{ status: 500 }
			);
		}

		// 2. Envoyer emails via Brevo UNIQUEMENT si nouveau
		if (isNewSubscriber) {
			try {
				// Configuration de l'API Brevo
				const apiInstance = new brevo.TransactionalEmailsApi();
				apiInstance.setApiKey(
					brevo.TransactionalEmailsApiApiKeys.apiKey,
					BREVO_API_KEY
				);

				// Email de bienvenue au nouvel abonné
				const welcomeEmail = new brevo.SendSmtpEmail();
				welcomeEmail.sender = {
					email: "xavieraymericfrey@gmail.com",
					name: "Xavier Aymeric Frey",
				};
				welcomeEmail.to = [
					{
						email: email,
						name: "",
					},
				];
				welcomeEmail.subject =
					"Bienvenue dans la newsletter d'Ombres sur le lac";
				welcomeEmail.htmlContent = `
					<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
						<h1 style="color: #1a4554; text-align: center;">Merci pour votre inscription !</h1>

						<p>Bonjour,</p>

						<p>Merci de vous être inscrit(e) à la newsletter de <strong>Xavier Aymeric Frey</strong>.</p>

						<p>Vous recevrez désormais toutes les actualités concernant <em>"Ombres sur le lac"</em> :</p>
						<ul>
							<li>📚 Nouvelles sorties</li>
							<li>🎭 Événements et séances de dédicace</li>
							<li>✍️ Coulisses de l'écriture</li>
						</ul>

						<p>En attendant, n'hésitez pas à découvrir le site : <a href="https://xavieraymericfrey.vercel.app">xavieraymericfrey.vercel.app</a></p>

						<hr style="margin: 30px 0; border: 1px solid #e5e5e5;">

						<p style="font-size: 12px; color: #666;">
							Xavier Aymeric Frey - Auteur d'"Ombres sur le lac"<br>
							xavieraymericfrey@gmail.com
						</p>
					</div>
				`;

				await apiInstance.sendTransacEmail(welcomeEmail);

				// Email de notification à Xavier
				const notificationEmail = new brevo.SendSmtpEmail();
				notificationEmail.sender = {
					email: "xavieraymericfrey@gmail.com",
					name: "Notification Newsletter",
				};
				notificationEmail.to = [
					{
						email: "xavieraymericfrey@gmail.com",
						name: "Xavier Aymeric Frey",
					},
				];
				notificationEmail.subject =
					"🎉 Nouvelle inscription newsletter - Xavier Aymeric Frey";
				notificationEmail.htmlContent = `
					<div style="font-family: Arial, sans-serif; padding: 20px;">
						<h2>Nouvelle inscription à la newsletter !</h2>
						<p><strong>Email :</strong> ${email}</p>
						<p><strong>Date :</strong> ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}</p>
						<p><em>Contact ajouté à votre liste Brevo automatiquement.</em></p>
					</div>
				`;

				await apiInstance.sendTransacEmail(notificationEmail);
			} catch (emailError) {
				console.error("Erreur envoi email:", emailError);
				// On continue même si l'email échoue, car l'inscription Brevo a réussi
			}
		}

		return NextResponse.json({ message }, { status: 200 });
	} catch (error) {
		console.error("Erreur serveur:", error);
		return NextResponse.json(
			{ error: "Erreur serveur. Veuillez réessayer." },
			{ status: 500 }
		);
	}
}
