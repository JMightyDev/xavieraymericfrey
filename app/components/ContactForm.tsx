"use client";

import React, { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus({ type: null, message: "" });

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
				setStatus({
					type: "success",
					message: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
				});
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus({
					type: "error",
					message: result.error || "Une erreur est survenue",
				});
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "Erreur de connexion. Veuillez réessayer.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="bg-snow-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30">
			<h2 className="text-2xl font-serif mb-6 text-mountain-blue">
				Envoyez-moi un message
			</h2>

			{status.type && (
				<div
					className={`mb-6 p-4 rounded-lg shadow-sm ${
						status.type === "success"
							? "bg-alpine-green/10 text-alpine-green border border-alpine-green/30"
							: "bg-sunset-orange/10 text-red-700 border border-sunset-orange/30"
					}`}>
					<div className="flex items-center space-x-2">
						{status.type === "success" ? (
							<svg
								className="w-5 h-5 text-alpine-green"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						) : (
							<svg
								className="w-5 h-5 text-red-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						)}
						<span>{status.message}</span>
					</div>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-mountain-blue mb-2">
						Nom complet *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						placeholder="Votre nom et prénom"
						className="w-full px-4 py-3 border border-morning-mist/40 rounded-lg bg-snow-white/50 focus:outline-none focus:border-lake-turquoise transition-all duration-200 hover:shadow-md"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-mountain-blue mb-2">
						Adresse email *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						placeholder="votre.email@exemple.com"
						className="w-full px-4 py-3 border border-morning-mist/40 rounded-lg bg-snow-white/50 focus:outline-none focus:border-lake-turquoise transition-all duration-200 hover:shadow-md"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-mountain-blue mb-2">
						Votre message *
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						value={formData.message}
						onChange={handleChange}
						required
						placeholder="Dites-moi tout ! Question sur le livre, demande de séance de dédicace, ou simplement pour dire bonjour..."
						className="w-full px-4 py-3 border border-morning-mist/40 rounded-lg bg-snow-white/50 focus:outline-none focus:border-lake-turquoise transition-all duration-200 hover:shadow-md resize-none"></textarea>
				</div>

				<div>
					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-gradient-to-r from-mountain-blue to-lake-turquoise hover:from-mountain-blue/90 hover:to-lake-turquoise/90 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white font-medium px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:transform-none">
						{isLoading ? (
							<div className="flex items-center justify-center space-x-2">
								<svg
									className="animate-spin h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24">
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								<span>Envoi en cours...</span>
							</div>
						) : (
							<div className="flex items-center justify-center space-x-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
									/>
								</svg>
								<span>Envoyer le message</span>
							</div>
						)}
					</button>
				</div>
			</form>

			<div className="mt-6 text-center text-sm text-stone-gray/80">
				<p>* Champs obligatoires</p>
				<p className="mt-2">
					Vos données personnelles sont protégées et ne seront pas partagées.
				</p>
			</div>
		</div>
	);
}
