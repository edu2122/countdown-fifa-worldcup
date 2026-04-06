export type Locale = 'es' | 'en' | 'fr';

export type Translation = {
	title: string;
	description: string;
	badge: string;
	heroTitle: string;
	heroCopy: string;
	kickoffLabel: string;
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
	statusLoading: string;
	statusStarted: string;
	citiesTitle: string;
	citiesCopy: string;
	filterAll: string;
	filterCanada: string;
	filterMexico: string;
	filterUsa: string;
	fifaLink: string;
};

export const translations: Record<Locale, Translation> = {
	es: {
		title: 'Cuenta regresiva | Mundial 2026',
		description: 'Cuenta regresiva para el inicio del Mundial 2026 en USA, Mexico y Canada.',
		badge: 'FIFA WORLD CUP 2026',
		heroTitle: 'Cuenta regresiva para USA · Mexico · Canada',
		heroCopy: 'El torneo inicia el 11 de junio de 2026. Falta cada vez menos para el primer silbatazo.',
		kickoffLabel: 'Hora local del inicio:',
		days: 'Dias',
		hours: 'Horas',
		minutes: 'Minutos',
		seconds: 'Segundos',
		statusLoading: 'Actualizando contador...',
		statusStarted: 'Ya empezo el Mundial 2026!',
		citiesTitle: 'Ciudades sede 2026',
		citiesCopy: '16 ciudades entre Canada, Mexico y USA.',
		filterAll: 'Todos',
		filterCanada: 'Canada',
		filterMexico: 'Mexico',
		filterUsa: 'USA',
		fifaLink: 'Ver sitio oficial FIFA'
	},
	en: {
		title: 'Countdown | World Cup 2026',
		description: 'Countdown to the opening of the 2026 World Cup in USA, Mexico, and Canada.',
		badge: 'FIFA WORLD CUP 2026',
		heroTitle: 'Countdown to USA · Mexico · Canada',
		heroCopy: 'The tournament starts on June 11, 2026. Kickoff is getting closer every day.',
		kickoffLabel: 'Your local kickoff time:',
		days: 'Days',
		hours: 'Hours',
		minutes: 'Minutes',
		seconds: 'Seconds',
		statusLoading: 'Updating countdown...',
		statusStarted: 'The 2026 World Cup has started!',
		citiesTitle: '2026 Host Cities',
		citiesCopy: '16 host cities across Canada, Mexico, and USA.',
		filterAll: 'All',
		filterCanada: 'Canada',
		filterMexico: 'Mexico',
		filterUsa: 'USA',
		fifaLink: 'Visit official FIFA site'
	},
	fr: {
		title: 'Compte a rebours | Coupe du Monde 2026',
		description: 'Compte a rebours avant le debut de la Coupe du Monde 2026 aux USA, Mexique et Canada.',
		badge: 'FIFA WORLD CUP 2026',
		heroTitle: 'Compte a rebours vers USA · Mexique · Canada',
		heroCopy: 'Le tournoi commence le 11 juin 2026. Le coup d\'envoi approche chaque jour.',
		kickoffLabel: 'Heure locale du coup d\'envoi :',
		days: 'Jours',
		hours: 'Heures',
		minutes: 'Minutes',
		seconds: 'Secondes',
		statusLoading: 'Mise a jour du compteur...',
		statusStarted: 'La Coupe du Monde 2026 a commence!',
		citiesTitle: 'Villes hotes 2026',
		citiesCopy: '16 villes hotes entre le Canada, le Mexique et les USA.',
		filterAll: 'Tous',
		filterCanada: 'Canada',
		filterMexico: 'Mexique',
		filterUsa: 'USA',
		fifaLink: 'Voir le site officiel FIFA'
	}
};
